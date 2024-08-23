import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconRulerCombined = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21,2H3C2.4,2,2,2.4,2,3v18c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1v-3H7c-0.6,0-1-0.4-1-1s0.4-1,1-1h3v-2H7c-0.6,0-1-0.4-1-1s0.4-1,1-1h3v-2H7c-0.6,0-1-0.4-1-1s0.4-1,1-1h1V7c0-0.6,0.4-1,1-1s1,0.4,1,1v3h2V7c0-0.6,0.4-1,1-1s1,0.4,1,1v3h2V7c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z' }));
