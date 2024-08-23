import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconBorderClear = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: '' }));
