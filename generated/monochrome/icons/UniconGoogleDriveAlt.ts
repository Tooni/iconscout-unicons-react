import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconGoogleDriveAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'm6 19.796 3-5.197h12l-3 5.197H6z' }),createElement('path', { d: 'M15 14.599h6L15 4.204H9L15 14.6z' }),createElement('path', { d: 'm3 14.599 3 5.197L12 9.4 9 4.204 3 14.6z' }));
