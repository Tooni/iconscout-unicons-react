import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconCheckCircle = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M10.313 16.094a.997.997 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a.997.997 0 0 1-.707.293Z' }),createElement('path', { d: 'M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.207 7.613-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413Z' }));
