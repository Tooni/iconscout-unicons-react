import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconHistory = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12 2a10.017 10.017 0 0 0-6.994 2.872V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.98 7.98 0 1 1 4 12a1 1 0 0 0-2 0A10 10 0 1 0 12 2Z' }),createElement('path', { d: 'M14 13h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2Z' }),createElement('path', { d: 'M12 4a8.008 8.008 0 0 0-5.782 2.5h2.288a1 1 0 0 1 0 2h-4.5a.99.99 0 0 1-.978-.889A9.922 9.922 0 0 0 2 12a1 1 0 0 1 2 0 8 8 0 1 0 8-8Zm2 9h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2Z' }));
