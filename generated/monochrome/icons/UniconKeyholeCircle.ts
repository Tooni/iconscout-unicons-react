import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconKeyholeCircle = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M14 10a2 2 0 1 0-3 1.723V15a1 1 0 0 0 2 0v-3.277A1.991 1.991 0 0 0 14 10Z' }),createElement('path', { d: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 9.723V15a1 1 0 0 1-2 0v-3.277a2 2 0 1 1 2 0Z' }));
