import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconEllipsisV = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M12,7c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,7,12,7z M12,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,17,12,17z' }));
