import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconColumns = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M11 2h2v20h-2z' }),createElement('path', { d: 'M3 2h8v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z' }),createElement('path', { d: 'M13 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-8V2z' }));
