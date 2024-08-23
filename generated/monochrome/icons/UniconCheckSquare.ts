import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconCheckSquare = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M10.2 16.4a.997.997 0 0 1-.707-.293l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414l-6.8 6.8a.997.997 0 0 1-.707.293Z' }),createElement('path', { d: 'M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-3.293 7.307-6.8 6.8a1 1 0 0 1-1.414 0l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414Z' }));
