import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconArrowDownRight = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M17 18H7a1 1 0 0 1 0-2h9V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1Z' }),createElement('path', { d: 'M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18Z' }));
