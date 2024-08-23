import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconProcess = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M8.625 8.5h-4.5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v3.5h3.5a1 1 0 0 1 0 2Z' }),createElement('path', { d: 'M21 13a1 1 0 0 1-1-1A7.995 7.995 0 0 0 5.08 8.001a1 1 0 0 1-1.731-1.002A9.995 9.995 0 0 1 22 12a1 1 0 0 1-1 1zm-1.125 9a1 1 0 0 1-1-1v-3.5h-3.5a1 1 0 0 1 0-2h4.5a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1z' }),createElement('path', { d: 'M12 22A10.012 10.012 0 0 1 2 12a1 1 0 0 1 2 0 7.995 7.995 0 0 0 14.92 3.999 1 1 0 0 1 1.731 1.002A10.032 10.032 0 0 1 12 22Z' }));
