import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconAlignRight = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21.5,18h-15C6.223877,18,6,18.223877,6,18.5S6.223877,19,6.5,19h15c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,18,21.5,18z M2.5,7h19C21.776123,7,22,6.776123,22,6.5S21.776123,6,21.5,6h-19C2.223877,6,2,6.223877,2,6.5S2.223877,7,2.5,7z M21.5,10h-15C6.223877,10,6,10.223877,6,10.5S6.223877,11,6.5,11h15c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,10,21.5,10z M21.5,14h-19C2.223877,14,2,14.223877,2,14.5S2.223877,15,2.5,15h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,14,21.5,14z' }));
