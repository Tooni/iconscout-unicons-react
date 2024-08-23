import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconRecordAudio = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 16a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z' }));
