import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconClockEight = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12 6a1 1 0 0 0-1 1v4.422l-2.098 1.212a1 1 0 0 0 1 1.732l2.598-1.5A1.005 1.005 0 0 0 13 12V7a1 1 0 0 0-1-1Z' }),createElement('path', { d: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10a1.005 1.005 0 0 1-.5.866l-2.598 1.5a1 1 0 0 1-1-1.732L11 11.422V7a1 1 0 0 1 2 0Z' }));
