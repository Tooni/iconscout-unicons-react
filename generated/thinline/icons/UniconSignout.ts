import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconSignout = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M4,12c0,0.276123,0.223877,0.5,0.5,0.5h8.7930298l-2.6465454,2.6464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C10.5,15.776062,10.723877,15.999939,11,16c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l3.5-3.5c0.000061-0.000061,0.0001221-0.000061,0.0001831-0.0001221c0.1951294-0.1952515,0.1950684-0.5117188-0.0001831-0.7068481l-3.5-3.5c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702L13.2930298,11.5H4.5C4.223877,11.5,4,11.723877,4,12z M17.5,2h-11C5.119812,2.0012817,4.0012817,3.119812,4,4.5v4C4,8.776123,4.223877,9,4.5,9S5,8.776123,5,8.5v-4C5.0009155,3.671936,5.671936,3.0009155,6.5,3h11c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5v15c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5h-11c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-4C5,15.223877,4.776123,15,4.5,15S4,15.223877,4,15.5v4c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h11c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-15C19.9987183,3.119812,18.880188,2.0012817,17.5,2z' }));
