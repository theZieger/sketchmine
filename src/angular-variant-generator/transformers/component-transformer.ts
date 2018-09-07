import * as ts from 'typescript';
import {
  getSymbolName,
  getInitializer,
  getComponentDecorator,
  getDecoratorOfType,
} from '@angular-meta-parser/utils';
import { JSDOM } from 'jsdom';

export function componentTransformer(context: ts.TransformationContext) {
  return (rootNode: ts.Node) => {
    function visit(node: ts.Node): ts.Node {

      /** remove originalClassName Decorator */
      if (ts.isDecorator(node)) {
        const expr = node.expression as ts.CallExpression;
        if (expr && expr.expression) {
          if (getSymbolName(expr.expression) === 'OriginalClassName') {
            return undefined;
          }
        }
      }

      if (ts.isClassDeclaration(node)) {
        node.name = ts.createIdentifier(context.getCompilerOptions().className as string);
        /** transform the template tag with the variant */
        const decorator = getComponentDecorator(node);
        if (decorator) {
          (node as any)
          .decorators[0]
          .expression
          .arguments[0]
          .properties = ts.createNodeArray(
            decorator.properties.map((prop) => {
              if (!ts.isPropertyAssignment(prop)) {
                return prop;
              }
              const name = getSymbolName(prop);
              if (name === 'template') {
                const html = (getInitializer(prop) as string).trim();
                const modified =  applyChangeOnTemplate(html, context);
                return ts.createPropertyAssignment(
                  ts.createIdentifier('template'),
                  ts.createNoSubstitutionTemplateLiteral(modified),
                ) as any;
              }
              return prop;
            }),
          );
        }
      }
      return ts.visitEachChild(node, visit, context);
    }
    return ts.visitNode(rootNode, visit);
  };
}

function applyChangeOnTemplate(template: string, context: ts.TransformationContext): string {
  const { selector, type, key, value } = context.getCompilerOptions();
  const dom = new JSDOM(template);
  const document = dom.window.document;

  [].slice.call(document.querySelectorAll(selector as string))
    .forEach((el: HTMLElement) => {
      if (type === 'property') {
        addProperty(el, key as string, value as string);
      }
    });

  return document.body.innerHTML;
}

function addProperty(element: HTMLElement, key: string, value: string): HTMLElement {
  /** JSON.parse cannot handle undefined */
  if (value === 'undefined') {
    element.setAttribute(key, undefined);
  } else {
    element.setAttribute(key, JSON.parse(value));
  }
  return element;
}
