import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconCheck = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M9.84 17.08a.997.997 0 0 1-.707-.293l-3.84-3.84a1 1 0 1 1 1.414-1.414l3.133 3.133 7.453-7.453a1 1 0 0 1 1.414 1.414l-8.16 8.16a.997.997 0 0 1-.707.293Z' }));
