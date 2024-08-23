import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconBatteryEmpty = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M17,7H4A2,2,0,0,0,2,9v6a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V9A2,2,0,0,0,17,7Zm0,8H4V9H17Zm4-5a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,21,10Z' }));
