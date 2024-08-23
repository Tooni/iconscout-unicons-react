import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconCube = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12 12.3 3.5 7.05 12 1.8l8.5 5.25z' }),createElement('path', { d: 'M12 22.2v-9.9l8.5-5.25v9.9z' }),createElement('path', { d: 'm12 22.2-8.5-5.25v-9.9L12 12.3z' }));
