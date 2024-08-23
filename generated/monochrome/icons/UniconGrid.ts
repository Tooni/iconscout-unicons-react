import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconGrid = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M22,6H2V3c0-0.55228,0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1V6z' }),createElement('path', { d: 'M2,16h9l0,0v6l0,0H3c-0.55228,0-1-0.44772-1-1V16L2,16z' }),createElement('path', { d: 'M21,22h-8l0,0v-6l0,0h9l0,0v5C22,21.55228,21.55228,22,21,22z' }));
