import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconCircleLayer = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M15 2a6.998 6.998 0 0 0-6.88 5.737 6 6 0 0 1 8.143 8.143A6.997 6.997 0 0 0 15 2z' }),createElement('path', { d: 'M11 7a6 6 0 0 0-5.97 5.406 4.997 4.997 0 0 1 6.564 6.564A6 6 0 0 0 11 7z' }));
