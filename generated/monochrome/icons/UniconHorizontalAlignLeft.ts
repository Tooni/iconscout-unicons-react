import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconHorizontalAlignLeft = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M16 10H4V6h11a1 1 0 0 1 1 1v3z' }),createElement('path', { d: 'M21 18H4v-8h17a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z' }),createElement('path', { d: 'M3 22a1 1 0 0 1-1-.999V3a1 1 0 0 1 2 0v18a1 1 0 0 1-.999 1H3z' }));
