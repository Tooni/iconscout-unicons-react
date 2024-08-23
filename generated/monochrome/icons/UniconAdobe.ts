import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconAdobe = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M2 22.041a.998.998 0 0 1-1-1V2.959a1 1 0 0 1 1-1h7.425a1 1 0 0 1 .925 1.38L2.925 21.42a1 1 0 0 1-.925.62Zm14.244 0H13.63a1 1 0 0 1-.891-.546l-1.522-2.99H8.963a1 1 0 0 1-.928-1.372L11.094 9.5a1 1 0 0 1 .928-.628h.01a1 1 0 0 1 .926.646l4.221 11.168a1 1 0 0 1-.935 1.354ZM22 21.809a.999.999 0 0 1-.921-.613L13.56 3.346a1 1 0 0 1 .921-1.387H22a1 1 0 0 1 1 1v17.85a1 1 0 0 1-.802.98 1.049 1.049 0 0 1-.198.02Z' }));
