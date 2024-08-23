import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconBorderHorizontal = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M20 13H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z' }));
