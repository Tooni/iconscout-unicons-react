import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconLeftIndent = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm8 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8-4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z' }),createElement('path', { d: 'M21 14.666a.999.999 0 0 1-.64-.231l-2-1.667a1 1 0 0 1 0-1.536l2-1.667a1 1 0 0 1 1.64.769v3.333a1 1 0 0 1-1 1Z' }));
