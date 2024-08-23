import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconSanitizer = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12.5,12.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5C15,13.6,13.9,12.5,12.5,12.5z M12.5,16.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C14,15.8,13.3,16.5,12.5,16.5z M17.6,7.2L15,5.2V3h1.5C16.8,3,17,2.8,17,2.5S16.8,2,16.5,2H7.7C6.8,2,5.9,2.4,5.3,3L4.1,4.1C4.1,4.2,4,4.4,4,4.5C4,4.8,4.2,5,4.5,5c0.1,0,0.3-0.1,0.4-0.1L6,3.7C6.4,3.3,7.1,3,7.7,3H10v2.2l-2.6,2C6.5,7.9,6,8.9,6,10v11.5C6,21.8,6.2,22,6.5,22h12c0.3,0,0.5-0.2,0.5-0.5V10C19,8.9,18.5,7.9,17.6,7.2z M11,3h3v2h-3V3z M18,21H7V10c0-0.8,0.4-1.5,1-2l2.7-2h3.7L17,8c0.6,0.5,1,1.2,1,2V21z' }));
