import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconBorderInner = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M19.965 13h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z' }),createElement('path', { d: 'M11.965 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1Z' }));
