import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconSpaceKey = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h16v-3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z' }));
