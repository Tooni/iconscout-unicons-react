import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconSanitizerAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12 3v1h2V3h1a1 1 0 0 0 0-2h-4.764a4.593 4.593 0 0 0-4.13 2.553 1 1 0 0 0 1.789.894A2.603 2.603 0 0 1 10.235 3Z' }),createElement('path', { d: 'M16 5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h6zm-2 12h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z' }),createElement('path', { d: 'M16 8h-6a3.003 3.003 0 0 0-3 3v9a3.003 3.003 0 0 0 3 3h6a3.003 3.003 0 0 0 3-3v-9a3.003 3.003 0 0 0-3-3Zm-2 9h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z' }));
