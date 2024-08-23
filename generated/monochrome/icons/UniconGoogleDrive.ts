import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconGoogleDrive = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M15.334 14.887H22l-6.666-11.55H8.667l6.667 11.55z' }),createElement('path', { d: 'M8.667 3.338 2 14.888l3.334 5.774L12 9.112z' }),createElement('path', { d: 'm8.667 14.887-3.333 5.775h13.333L22 14.887z' }));
