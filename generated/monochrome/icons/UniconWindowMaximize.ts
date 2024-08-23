import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconWindowMaximize = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z' }),createElement('path', { d: 'M2,10h20l0,0v11c0,0.55228-0.44772,1-1,1H3c-0.55228,0-1-0.44772-1-1V10L2,10z' }));
