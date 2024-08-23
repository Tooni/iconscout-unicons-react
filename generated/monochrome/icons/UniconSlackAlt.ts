import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconSlackAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M9.34 2a2 2 0 0 0 0 4h2V4a2 2 0 0 0-2-2m0 5.33H4a2 2 0 1 0 0 4h5.34a2 2 0 0 0 0-4' }),createElement('path', { d: 'M22 9.33a2 2 0 1 0-4 0v2h2a2 2 0 0 0 2-2m-5.32 0V4a2 2 0 1 0-4 0v5.33a2 2 0 1 0 4 0' }),createElement('path', { d: 'M14.66 22a2 2 0 0 0 0-4h-2v2a2 2 0 0 0 2 2m0-5.33H20a2 2 0 0 0 0-4h-5.34a2 2 0 0 0 0 4' }),createElement('path', { d: 'M2 14.67a2 2 0 1 0 4 0v-2H4a2 2 0 0 0-2 2m5.32 0V20a2 2 0 1 0 4 0v-5.33a2 2 0 1 0-4 0' }));
