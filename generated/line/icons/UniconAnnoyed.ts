import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconAnnoyed = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M9,9a1,1,0,1,0,1,1A1,1,0,0,0,9,9Zm6,4a5,5,0,0,0-4.37,2.57A1,1,0,0,0,11,16.93a1,1,0,0,0,.49.13,1,1,0,0,0,.87-.51A3,3,0,0,1,15,15a1,1,0,0,0,0-2Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,15,9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' }));
