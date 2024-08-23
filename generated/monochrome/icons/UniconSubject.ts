import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconSubject = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 10H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm8-5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z' }));
