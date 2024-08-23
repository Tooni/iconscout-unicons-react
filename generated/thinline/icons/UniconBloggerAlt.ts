import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconBloggerAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M14,13.5h-4c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h4c0.276123,0,0.5-0.223877,0.5-0.5S14.276123,13.5,14,13.5z M10,10.5h1c0.276123,0,0.5-0.223877,0.5-0.5S11.276123,9.5,11,9.5h-1c-0.276123,0-0.5,0.223877-0.5,0.5S9.723877,10.5,10,10.5z M16,10.5c-0.2759399-0.0005493-0.4994507-0.2240601-0.5-0.5V9c-0.0023193-1.9320068-1.5679932-3.4976807-3.5-3.5h-2C7.5158691,5.5026855,5.5026855,7.5158691,5.5,10v4c0.0026855,2.4841309,2.0158691,4.4973145,4.5,4.5h4c2.4841309-0.0026855,4.4973145-2.0158691,4.5-4.5v-1C18.4987183,11.619812,17.380188,10.5012817,16,10.5z M17.5,14c-0.0023193,1.9320068-1.5679932,3.4976807-3.5,3.5h-4c-1.9320068-0.0023193-3.4976807-1.5679932-3.5-3.5v-4C6.5023193,8.0679932,8.0679932,6.5023193,10,6.5h2c1.380188,0.0012817,2.4987183,1.119812,2.5,2.5v1c0.0009155,0.828064,0.671936,1.4990845,1.5,1.5s1.4990845,0.671936,1.5,1.5V14z M20,1H4C2.3438721,1.0018311,1.0018311,2.3438721,1,4v16c0.0018311,1.6561279,1.3438721,2.9981689,3,3h16c1.6561279-0.0018311,2.9981689-1.3438721,3-3V4C22.9981689,2.3438721,21.6561279,1.0018311,20,1z M22,20c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H4c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V4c0.0014038-1.1040039,0.8959961-1.9985962,2-2h16c1.1040039,0.0014038,1.9985962,0.8959961,2,2V20z' }));
