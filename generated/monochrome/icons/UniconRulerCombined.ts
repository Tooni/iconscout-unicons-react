import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconRulerCombined = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M14 10h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1zM9 6a1 1 0 0 0-1 1v1H7a1 1 0 0 0 0 2h3V7a1 1 0 0 0-1-1zm1 6v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1z' }),createElement('path', { d: 'M10 12v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1Z' }),createElement('path', { d: 'M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z' }),createElement('path', { d: 'M10 16v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm8-6h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1z' }));
