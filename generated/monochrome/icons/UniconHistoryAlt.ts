import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconHistoryAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12,2A10.01687,10.01687,0,0,0,5,4.87714V3A1,1,0,0,0,3,3V7.5a.99974.99974,0,0,0,1,1H8.5a1,1,0,0,0,0-2H6.21844A7.99161,7.99161,0,1,1,12,20a1,1,0,0,0,0,2A10,10,0,0,0,12,2Z' }),createElement('path', { d: 'M14,13H12a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v2h1a1,1,0,0,1,0,2Z' }),createElement('path', { d: 'M12,4A8.00807,8.00807,0,0,0,6.21844,6.5H8.5a1,1,0,0,1,0,2H4a.98882.98882,0,0,1-.97583-.88013A9.977,9.977,0,0,0,12,22a1,1,0,0,1,0-2A8,8,0,0,0,12,4Zm2,9H12a.99974.99974,0,0,1-1-1V9a1,1,0,0,1,2,0v2h1a1,1,0,0,1,0,2Z' }));
