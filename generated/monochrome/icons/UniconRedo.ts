import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconRedo = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M19.875 8.5h-4.5a1 1 0 0 1 0-2h3.5V3a1 1 0 0 1 2 0v4.5a1 1 0 0 1-1 1Z' }),createElement('path', { d: 'M12 22a10 10 0 1 1 8.651-15.001 1 1 0 0 1-1.73 1.002A7.99 7.99 0 1 0 20 12a1 1 0 0 1 2 0 10.011 10.011 0 0 1-10 10Z' }));
