import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconLeftIndentAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21 19h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z' }),createElement('path', { d: 'M9 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1zm-4-4.333a.999.999 0 0 1-.64-.231l-2-1.667a1 1 0 0 1 0-1.538l2-1.667a1 1 0 0 1 1.28 1.538L4.562 12l1.078.898A1 1 0 0 1 5 14.667z' }));
