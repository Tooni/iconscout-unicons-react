import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconVuejsAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12.018 19.151 4.315 6h2.823l4.886 8.407L16.871 6h2.809z' }),createElement('path', { d: 'm14.38 4.001-2.374 3.956-2.384-3.956H.825L12.02 23.115 23.161 4H14.38zm-2.362 15.15L4.315 6h2.823l4.886 8.407L16.871 6h2.809l-7.662 13.151z' }));
