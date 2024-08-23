import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconMeh = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm6,3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0-5a1,1,0,1,0,1,1A1,1,0,0,0,15,9ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' }));
