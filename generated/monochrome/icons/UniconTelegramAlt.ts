import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconTelegramAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M17.688 21.744a2.02 2.02 0 0 1-1.242-.427l-4.03-3.122-2.702 2.983a1 1 0 0 1-1.698-.383l-2.02-6.682-3.626-1.26a2.042 2.042 0 0 1-.103-3.818L20.187 1.8a2.042 2.042 0 0 1 2.771 2.295L19.695 20.11a2.054 2.054 0 0 1-2.008 1.633Z' }),createElement('path', { d: 'M8.973 21.506a1 1 0 0 1-.957-.71l-2.168-7.16a.999.999 0 0 1 .495-1.176L16.91 6.958a1 1 0 0 1 1.17 1.594l-7.084 7.083-1.044 5.072a1 1 0 0 1-.933.798h-.046Z' }));
