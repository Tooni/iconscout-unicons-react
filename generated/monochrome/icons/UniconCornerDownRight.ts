import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconCornerDownRight = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M14.058 22a1 1 0 0 1-.707-1.707l3.92-3.921-3.92-3.922a1 1 0 1 1 1.414-1.414l4.628 4.629a1 1 0 0 1 0 1.414l-4.628 4.628a.997.997 0 0 1-.707.293Z' }),createElement('path', { d: 'M18.686 17.372H9.314a5.006 5.006 0 0 1-5-5V3a1 1 0 0 1 2 0v9.372a3.003 3.003 0 0 0 3 3h9.372a1 1 0 0 1 0 2Z' }));
