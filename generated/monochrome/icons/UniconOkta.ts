import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconOkta = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M11.998 2a10 10 0 1 0 10 10 9.995 9.995 0 0 0-10-10Zm0 15.01a5.01 5.01 0 1 1 5.01-5.01 5.014 5.014 0 0 1-5.01 5.01Z' }));
