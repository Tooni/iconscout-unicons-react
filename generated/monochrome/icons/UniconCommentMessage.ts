import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconCommentMessage = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z' }),createElement('path', { d: 'M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20ZM9 7h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm6 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm2-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z' }),createElement('path', { d: 'M15 17H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-8H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z' }));
