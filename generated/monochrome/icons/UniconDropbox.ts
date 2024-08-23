import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconDropbox = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M16.53 10.091 21 12.939l-4.502 2.868L12 12.941l-4.498 2.866L3 12.939l4.47-2.848L3 7.243l4.502-2.868L12 7.241l4.498-2.866L21 7.243z' }),createElement('path', { d: 'M16.467 10.091 12 7.245l-4.467 2.846L12 12.936z' }),createElement('path', { d: 'm7.531 16.757-.029-.95L12 12.941l4.498 2.866.036.95-4.502 2.868z' }));
