import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconSignout = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'm21.207 11.293-3-3a1 1 0 1 0-1.414 1.415L18.086 11H12.5a1 1 0 0 0 0 2h5.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.415Z' }),createElement('path', { d: 'M12.5 13a1 1 0 0 1 0-2h4V5a3.003 3.003 0 0 0-3-3h-8a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h8a3.003 3.003 0 0 0 3-3v-6Z' }));
