import { SvgParser } from '@sketch-svg-parser/svg-parser';
import { ISvg } from '@sketch-svg-parser/interfaces';

/* tslint:disable:max-line-length */
const checkboxDisabled = `
<svg _ngcontent-c0="" focusable="false" viewBox="0 0 512 512">
  <path _ngcontent-c0="" class="dt-checkbox-checkmark" d="M79.57 267.044l128.761 107.991 221.185-263.55" fill="transparent" stroke-dasharray="560" stroke-width="64"></path>
  <path _ngcontent-c0="" class="dt-checkbox-indeterminate" d="M80 256 h 352" fill="transparent" stroke-dasharray="352" stroke-width="64"></path>
</svg>`;

const actionspersession = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<polygon id="XMLID_419_" fill="inherit" points="370.23865,338.23825 407.67355,300.80334 245.05382,257.22491 288.6387,419.8382 326.06714,382.40329 411.66394,468.00009 455.83542,423.83502 "></polygon>
<path id="XMLID_420_" fill="inherit" d="M173.51688,271.43948c0.95409-4.22891,1.56006-8.58676,1.56006-13.10574
  c0-9.34746-2.35298-18.07603-6.1951-25.94722l184.31223-102.39641c6.09195,3.02986,12.86081,4.89291,20.12601,4.89291
  c25.09628,0,45.44147-20.34519,45.44147-45.44146S398.41635,44.0001,373.32007,44.0001
  c-20.47412,0-37.58316,13.62793-43.26254,32.23901h-92.14644c-5.37639-14.43374-19.16548-24.76105-35.4687-24.76105
  c-20.9705,0-37.96352,16.99301-37.96352,37.96351c0,20.96406,16.99301,37.96351,37.96352,37.96351
  c16.30322,0,30.09232-10.32732,35.4687-24.76105h92.14644c0.8703,2.84291,1.98553,5.55045,3.36508,8.12905L151.95329,211.58362
  c-10.06946-7.8454-22.57568-12.70607-36.33253-12.70607c-32.83853,0-59.45618,26.61765-59.45618,59.45619
  s26.61765,59.45618,59.45618,59.45618c18.76581,0,35.29465-8.87039,46.19571-22.45322l72.85205,25.10916l-8.24509-30.7692
  L173.51688,271.43948z"></path>
</svg>
`;

const cassandra = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
  <path d="M238.76 135.577c0-.102 0-.102 0 0 0-.102 0-.102 0 0zM413.052 276.988a416.65 416.65 0 0 0 11.293 7.794s-4.996-3.797-11.293-7.794zM206.68 197.038c.2.1.2.1 0 0z"></path>
  <path d="M482.608 182.147c4.897-4.897 9.494-10.193 13.392-15.89-11.094 12.391-29.582 30.081-47.77 26.982 10.593-8.494 20.487-27.282 26.783-33.578 1.3-2.099 2.498-4.397 3.898-6.496-14.89 14.99-38.377 35.978-61.162 33.779 14.39-13.792 25.284-32.88 32.379-51.367-10.792 16.489-25.884 40.674-45.371 47.57 11.792-12.793 21.287-29.183 27.183-45.573-9.794 14.093-23.185 32.28-40.076 37.876 9.395-9.593 20.488-23.185 22.888-36.876-8.896 11.292-31.481 43.573-48.47 39.375 10.893-13.091 19.487-27.782 27.282-42.873-6.596 8.795-13.592 17.489-21.487 25.184-10.393 10.194-24.385 12.892-10.393-4.797-.9.8-1.8 1.6-2.8 2.399 1.8-2.799 3.798-5.496 5.898-8.096-5.397 4.697-13.092 12.194-20.588 12.694 4.797-5.398 8.895-11.394 12.792-17.49.8-1.2 7.995-12.093 5.097-8.895 1.4-2.299 2.898-4.697 4.198-6.996-5.397 6.197-28.482 35.779-37.879 30.781 4.899-9.893 9.796-19.787 14.593-29.682-6.097 11.694-18.19 27.883-33.38 24.785 4.599-6.894 8.896-14.59 11.695-22.385-3.999 6.095-9.296 11.792-15.69 15.39-5.298 2.997-28.284 3.898-15.691-4.698-.8.8-1.7 1.6-2.6 2.299 1.4-2.899 3.498-5.596 5.697-7.995-11.893 11.194-32.98 15.09-20.586-6.495-4.397 6.894-8.895 13.99-14.493 20.087-7.795 8.495-3.195-10.493-2.197-13.992-3.498 5.697-8.595 14.591-15.19 16.89-8.196 2.899-2.999-15.29-2-18.389-1.298 3.699-2.797 7.396-4.596 10.993.4-1.798.898-3.496 1.499-5.296-4.898 13.691-13.094 15.19-14.59-.7-.302 3.398-1.1 6.996-2.3 10.194-.3-1.5-.6-2.998-.799-4.496-1 9.392-3.597 10.992-12.293 12.79-8.196 1.8-16.39 3.798-24.484 6.197-16.49 4.897-32.579 11.093-48.07 18.788-41.476 20.487-77.752 50.07-110.331 82.649 2.198-1.2 4.298-2.399 6.395-3.598-3.197 3.098-6.395 6.195-9.494 9.294 50.37-27.183 90.145-68.858 146.009-86.346-15.588 32.08 16.29 73.654 44.173 86.146 0 0-6.197-7.495-6.295-7.695-5.297-7.195-4.099-5.997-11.395-9.094-14.69-6.197-.699-18.29-.998-26.184a63.434 63.434 0 0 1 1.498-16.29c2-8.995-2.798-12.392-5.797-20.887-1.198-3.498-5.396-10.393-.298-11.492 2.297 7.195 5.795 13.991 10.193 20.087 2.098-4.697 4.797-9.195 7.994-13.192-1.197-3.297-.299-7.095 2.3-9.394 4.796-4.297 18.888-3.798 24.984-4.297-7.297 3.797-16.59 10.594-7.596 17.19 2.2 1.597 12.093 10.692 14.291 9.392-2.398-8.294-4.696-16.49-7.095-24.783 4.099 7.394 8.295 14.79 12.392 22.185 3.498-1.199 1-20.586.9-24.783 1.5 0 7.095 20.487 7.893 23.084 3.2-7.695 6.398-15.29 9.497-22.985 0 3.198-1.4 24.585.598 25.384a2491.834 2491.834 0 0 1 14.19-19.987c-1 3.297-8.892 22.686-6.994 24.485 6.895-4.598 13.79-9.195 20.687-13.792-1.899 2.598-16.09 19.188-14.99 21.087 4.396-1.6 15.99-3.298 18.989-6.795 2.797-3.5-4.5-13.692 6.794-13.692 6.197 0 3.298-14.29 8.495-13.492-.4 5.297-1.498 10.493-3.2 15.49 2.702 2.498 3.4 6.596 1.5 9.795-1.698 2.797-4.898 4.297-8.094 3.797-2.998 4.597-6.596 8.895-10.594 12.592 4.298.2 8.595.4 12.893.7-6.696 1.599-15.49 2.098-21.288 5.896 11.194 1.798 21.986 6.595 30.682 13.792 9.994-17.89 17.09-46.272-.4-61.863 36.576 6.496 64.76 24.385 98.237 37.978-6.294 1.898-8.393 10.193-11.49 15.19a119.411 119.411 0 0 1-13.693 17.889c-11.493 12.392-25.284 22.386-40.275 30.18-34.478 17.89-74.853 25.285-113.428 24.685-34.478-.499-65.56-10.493-98.838-17.789-38.278-8.494-79.45 9.895-115.928-8.394 6.695 5.297 13.791 9.294 22.086 11.493-7.195-1.3-14.09-3.698-20.587-6.896 20.686 16.389 45.672 14.091 70.656 14.291 6.695 0 31.68-2.098 25.184 8.294-4.997 7.995-11.893 14.892-18.689 21.287 5.897-4.997 12.093-9.694 18.39-14.191-4.898 6.796-10.794 12.893-16.89 18.688 10.693-8.894 21.985-17.789 34.378-24.185 3.199-1.599 14.99-7.295 13.091.4-2.098 8.595-7.595 16.69-12.69 23.785 3.896-5.197 8.094-10.093 12.69-14.69-2.797 6.896-6.895 13.291-11.092 19.287 8.195-10.793 20.487-27.683 35.577-27.482 22.687.2-1.598 26.383-7.594 33.579 5.096-4.897 10.293-9.695 15.59-14.291-4.198 6.696-8.996 12.891-14.091 18.887 7.795-7.495 15.69-14.89 24.285-21.486 15.99-12.292 11.593 4.198 9.094 16.89 1.1-2.599 2.198-5.097 3.397-7.595-.4 4.097-1.1 8.194-1.898 12.191 3.199-7.594 8.195-24.284 16.39-27.881-2.999 19.088-12.093 38.076-19.388 55.865 3.597-6.497 7.195-12.992 10.893-19.488-2.999 8.095-6.097 16.09-9.394 23.985 8.094-14.791 16.39-29.482 25.383-43.673 2.4-3.698 7.497-14.99 12.493-16.09 10.493-2.299 14.391 29.781 15.49 36.277-.3-2.498-.599-5.096-.899-7.595.9 3.997 1.699 8.096 2.397 12.093-1.398-10.694-9.593-44.573 9.495-41.975 18.788 2.599 6.496 50.57 3.697 62.361a294.028 294.028 0 0 0 5.099-14.09c-.901 6.196-2.1 12.492-3.599 18.587 7.994-20.186 16.79-43.872 10.394-65.359 19.588 13.892 29.88 36.878 28.182 60.763.4-2.198 1.199-4.098 1.398-6.495.3 3.697.4 7.295.1 10.992 7.596-21.986-6.595-51.368-16.189-70.556 15.29.7 28.383 25.685 35.078 37.177-2.098-3.798-4.097-7.695-5.896-11.692 1.5 2.398 2.998 4.696 4.397 7.195-5.796-10.394-22.386-50.469 5.896-35.179 8.594 4.598 13.492 13.992 16.69 22.787 1.9 6.295 3.198 12.89 4.097 19.388.1.799-.1 8.594 1.5 4.297.299 1.999.5 4.097.6 6.096 8.994-16.59-8.796-48.77-15.492-63.76 17.69-9.794 47.371 40.075 54.766 51.668a521.712 521.712 0 0 1-9.294-16.09c2.698 3.798 5.297 7.595 7.794 11.492-9.393-15.79-18.786-31.88-26.283-48.768-11.091-24.586 18.59 1.698 24.587 8.093-2.3-3.198-4.499-6.395-6.497-9.693 1.699 1.7 3.398 3.398 4.997 5.197-1.8-2.5-13.292-21.587-8.895-19.788 5.896 2.599 11.094 8.694 15.691 13.092 10.393 9.994 20.287 20.387 30.08 30.88-4.698-5.697-9.295-11.592-13.79-17.589 4.096 4.298 8.194 8.595 12.292 12.993-7.395-8.995-14.591-18.19-21.187-27.783-1.7-2.498-12.292-15.491-8.595-18.588 5.397-4.598 18.688 5.097 22.985 7.794-5.196-3.697-10.292-7.595-15.19-11.793 4.798 1.9 9.294 4.498 13.692 7.297-7.695-5.497-16.59-11.394-22.387-19.089 5.597-10.493 39.177 9.693 45.472 13.592a156.044 156.044 0 0 1-10.393-9.494c2.999 1.598 5.996 3.198 8.894 4.997-5.496-4.598-11.392-9.494-15.39-15.492 1.1-3.097 10.594 3.199 11.793 3.898 10.693 6.396 20.787 13.792 30.78 21.387-8.694-6.895-17.287-13.99-25.483-21.586 8.196 5.396 16.19 11.193 23.984 17.089-11.793-9.394-25.284-18.989-34.578-30.98 4.098-4.798 21.986 2.298 26.982 3.797-5.695-2.698-11.393-5.496-16.988-8.495 5.196 1 10.393 2.398 15.49 3.898-9.895-4.697-20.387-9.295-29.282-15.79 6.396-.1 13.592 3.497 19.488 5.897-4.597-3.598-9.594-6.898-14.891-9.396 4.597 1.3 8.995 3 13.391 4.798-5.196-4.097-10.992-7.894-17.188-10.294 28.482-1.598 54.466-20.787 70.056-43.771-2.898 3.597-6.296 6.995-9.994 10.193 8.695-8.695 6.297-5.496 0 0zM235.663 141.171z"></path>
  <path d="M414.55 281.585c6.297 4.497 11.293 7.794 11.293 7.794s-4.996-3.898-11.292-7.794zM232.864 205.332c-4.298-5.297-8.495-10.693-12.792-15.99-4.596 6.495-8.994.7-13.29 7.795 4.296 1.5 23.584 11.193 26.082 8.195zM218.073 253.002c-1.799 1.6-3.797 2.999-5.695 4.597 5.695-7.195 11.392-14.39 16.988-21.586-16.59 5.996-32.879 9.493-17.589 29.482a76.986 76.986 0 0 1 6.296-12.493z"></path>
  <path d="M199.785 214.527c-1.4 6.295-1.698 12.792-1 19.088 4.697.9 8.396 4.696 9.195 9.393 6.197-3.998 12.392-7.894 18.588-11.892-8.395-2.899-17.088-2.899-25.982-3.498 4.295-.9 8.493-1.8 12.791-2.8-2.4-1.398-13.692-9.991-13.592-10.291-1.5 6.395 0-.3 0 0zM228.367 213.028c-7.195-5.297-14.39-10.594-21.486-15.89-13.991 22.985 20.885 17.588 21.486 15.89z"></path>
  <path d="M215.075 217.824c-5.896-3.798-7.495-3.997-14.59-3.798 4.896 1.3 9.694 2.498 14.59 3.798zM242.358 246.306a3198.624 3198.624 0 0 0-16.09 22.886c2-7.495 3.998-14.89 5.997-22.386-5.496 5.197-19.788 20.387-12.992 26.884 7.594 7.295 23.785 5.995 33.579 4.696 22.984-2.998 43.873-16.19 56.464-35.677-9.094-6.296-20.087-11.093-31.181-11.194l18.29 17.99c-7.996-3.1-15.991-6.197-23.886-9.295l14.09 21.586c-2.898-2.297-19.086-17.489-21.585-16.189 2.299 8.395 4.598 16.79 6.896 25.284-3.998-7.596-7.896-15.09-11.893-22.685-.7 8.894-1.298 17.688-2 26.582-1.097-3.497-5.295-25.684-8.093-26.383-3.098 8.394-6.297 16.69-9.394 25.085.2-3.498 3.797-26.284 1.798-27.184z"></path>
</svg>`;

describe('checkbox disabled icon', () => {

  test('check if the checkbox disabled svg consist out of two shapes', () => {
    const svg = SvgParser.parse(checkboxDisabled, 16, 16);
    expect(svg.shapes).toHaveLength(2);
    expect(svg.shapes.every(shape => shape.points.length > 0)).toBeTruthy();
  });

  test('checkboxDisabled to not have styles', () => {
    const svg = SvgParser.parse(checkboxDisabled, 16, 16);
    svg.shapes.forEach(
      shape => expect(shape.style).toMatchObject(new Map([['strokeWidth', '1']])));
  });

  test('test cassandra icon', () => {
    const svg = SvgParser.parse(cassandra, 20, 20);
    expect(svg).toHaveProperty('size');
    expect(svg.size).toHaveProperty('width');
    expect(svg.size.width).toEqual(20);
    expect(svg.size.height).toEqual(20);
    expect(svg).toHaveProperty('shapes');
    expect(svg.shapes).toHaveLength(12);
  });
});
