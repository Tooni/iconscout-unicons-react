import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconChartPie = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,4c4,0,7.4,3,7.9,7H12V4z M16,18.9L12.6,13h7.4C19.6,15.5,18.2,17.7,16,18.9z' }));
