import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconTwitterAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M20.475 7.805c.01.185.01.37.01.545a11.885 11.885 0 0 1-.493 3.362A11.729 11.729 0 0 1 8.485 20.36a11.9 11.9 0 0 1-6.467-1.902 8.152 8.152 0 0 0 1.007.061 8.45 8.45 0 0 0 5.234-1.81 4.223 4.223 0 0 1-3.938-2.92 5.04 5.04 0 0 0 .792.072 4.04 4.04 0 0 0 1.12-.154 4.2 4.2 0 0 1-3.372-3.815 1.66 1.66 0 0 1-.02-.319v-.051a4.167 4.167 0 0 0 1.912.524A4.202 4.202 0 0 1 2.88 6.54a4.273 4.273 0 0 1 .566-2.129 11.968 11.968 0 0 0 8.7 4.412 4.219 4.219 0 0 1 7.187-3.846 8.443 8.443 0 0 0 2.684-1.028 4.978 4.978 0 0 1-1.543 3.856Z' }));
