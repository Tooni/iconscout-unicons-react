import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconHospitalSymbol = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16,16c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3h-4v3c0,0.6-0.4,1-1,1s-1-0.4-1-1V8c0-0.6,0.4-1,1-1s1,0.4,1,1v3h4V8c0-0.6,0.4-1,1-1s1,0.4,1,1V16z' }));
