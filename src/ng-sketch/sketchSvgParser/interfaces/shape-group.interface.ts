import { IBase } from '../../sketch-draw/interfaces/base.interface';

export interface IShapeGroup extends IBase {
  hasClickThrough: boolean;
  clippingMaskMode: number;
  hasClippingMask: boolean;
  windingRule: number;
}
