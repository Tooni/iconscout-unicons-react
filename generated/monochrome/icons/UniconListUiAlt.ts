import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconListUiAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21.5 8h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm0 5h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z' }));
