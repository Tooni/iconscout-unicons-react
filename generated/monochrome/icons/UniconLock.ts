import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconLock = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M16 11H8a1 1 0 0 1-1-1V7a5 5 0 0 1 10 0v3a1 1 0 0 1-1 1ZM9 9h6V7a3 3 0 0 0-6 0Z' }));
