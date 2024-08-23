import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconGrids = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M23 21V3a1 1 0 0 0-1-1h-5v20h5a1 1 0 0 0 1-1Z' }),createElement('path', { d: 'M1 3v18a1 1 0 0 0 1 1h5V2H2a1 1 0 0 0-1 1Z' }),createElement('path', { d: 'M9 2h6v20H9z' }),createElement('path', { d: 'M7 2h2v20H7zM15 2h2v20h-2z' }));
