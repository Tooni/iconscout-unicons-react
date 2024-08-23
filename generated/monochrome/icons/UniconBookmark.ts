import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconBookmark = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M18 22a1 1 0 0 1-.5-.134L12 18.694l-5.5 3.172A1 1 0 0 1 5 21V5a3.003 3.003 0 0 1 3-3h8a3.003 3.003 0 0 1 3 3v16a1 1 0 0 1-1 1Z' }));
