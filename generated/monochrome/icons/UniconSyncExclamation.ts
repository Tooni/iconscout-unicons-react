import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconSyncExclamation = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12 13a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1zm0 3a.99.99 0 0 1-1-1 1.05 1.05 0 0 1 .29-.71 1.027 1.027 0 0 1 .33-.21 1.002 1.002 0 0 1 1.09.21A1.052 1.052 0 0 1 13 15a.99.99 0 0 1-1 1z' }),createElement('path', { d: 'M12 2a10.017 10.017 0 0 0-7 2.877V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.98 7.98 0 0 1 20 12a1 1 0 0 0 2 0A10.011 10.011 0 0 0 12 2zm8 13.5h-4.5a1 1 0 0 0 0 2h2.282A7.98 7.98 0 0 1 4 12a1 1 0 0 0-2 0 9.987 9.987 0 0 0 17 7.123V21a1 1 0 0 0 2 0v-4.5a1 1 0 0 0-1-1z' }));
