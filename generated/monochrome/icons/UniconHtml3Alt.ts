import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconHtml3Alt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M11.99 22a1.001 1.001 0 0 1-.268-.037l-6.473-1.805a1 1 0 0 1-.728-.874L3.08 3.09A1 1 0 0 1 4.075 2h15.85a1 1 0 0 1 .996 1.089l-1.443 16.188a.999.999 0 0 1-.728.874l-6.491 1.812a1.001 1.001 0 0 1-.269.037Z' }),createElement('path', { d: 'M16.777 6.325A1 1 0 0 0 16.04 6H7.96a1 1 0 1 0 0 2h6.987l-.177 2H10a1 1 0 0 0 0 2h4.592l-.264 2.977-2.328.528-2.328-.53-.096-1.064a1 1 0 0 0-1.992.178l.16 1.79a1.001 1.001 0 0 0 .775.887l3.26.74a1.019 1.019 0 0 0 .443 0l3.26-.74a1.001 1.001 0 0 0 .774-.887l.78-8.79a1.001 1.001 0 0 0-.259-.764Z' }));
