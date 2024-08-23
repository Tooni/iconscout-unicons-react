import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconRightIndent = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M18.5552368,13.9994507C18.5549316,14.2756348,18.7785645,14.4996948,19.0546875,14.5c0.1154175,0.0001221,0.2272949-0.039917,0.3164673-0.1132812l2.4453125-2c0.026062-0.0213013,0.0499268-0.045166,0.071228-0.071228c0.1741943-0.213562,0.142334-0.5279541-0.071228-0.7022095l-2.4453125-2c-0.213623-0.1747437-0.5283813-0.1432495-0.703125,0.0703125s-0.1433105,0.5283813,0.0703125,0.703125L20.710022,12l-1.9717407,1.6132812C18.6225586,13.7081299,18.5553589,13.8498535,18.5552368,13.9994507z M2.5,6.5h19C21.776123,6.5,22,6.276123,22,6s-0.223877-0.5-0.5-0.5h-19C2.223877,5.5,2,5.723877,2,6S2.223877,6.5,2.5,6.5z M2.5,10.5h11c0.276123,0,0.5-0.223877,0.5-0.5s-0.223877-0.5-0.5-0.5h-11C2.223877,9.5,2,9.723877,2,10S2.223877,10.5,2.5,10.5z M2.5,14.5h11c0.276123,0,0.5-0.223877,0.5-0.5s-0.223877-0.5-0.5-0.5h-11C2.223877,13.5,2,13.723877,2,14S2.223877,14.5,2.5,14.5z M21.5,17.5h-19C2.223877,17.5,2,17.723877,2,18s0.223877,0.5,0.5,0.5h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,17.5,21.5,17.5z' }));
