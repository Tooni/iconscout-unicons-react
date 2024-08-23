import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconUnlock = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M7 9h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3z' }),createElement('path', { d: 'M9 7a3.002 3.002 0 0 1 5.116-2.13c.378.383.65.858.786 1.379l.002.007a1 1 0 0 0 1.934-.505 5.09 5.09 0 0 0-1.306-2.293A5.002 5.002 0 0 0 7 7v2h2V7z' }));
