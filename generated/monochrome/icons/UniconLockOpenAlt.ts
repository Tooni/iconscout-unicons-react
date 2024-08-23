import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconLockOpenAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M8 11a1 1 0 0 1-1-.999V7a5.002 5.002 0 0 1 8.532-3.542 5.078 5.078 0 0 1 1.307 2.293 1 1 0 1 1-1.937.501v-.003a3.057 3.057 0 0 0-.786-1.379A3.002 3.002 0 0 0 9 7v3a1 1 0 0 1-.999 1H8zM13.5 14.5a1.5 1.5 0 1 0-3 0c0 .443.195.836.5 1.11V17.002A1 1 0 0 0 12 18h.001A1 1 0 0 0 13 17v-1.39c.305-.274.5-.667.5-1.11z' }),createElement('path', { d: 'M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm-4 6.61V17a1 1 0 0 1-.999 1H12a1 1 0 0 1-1-.999V15.61a1.49 1.49 0 0 1-.5-1.11 1.5 1.5 0 1 1 3 0c0 .443-.195.836-.5 1.11z' }));
