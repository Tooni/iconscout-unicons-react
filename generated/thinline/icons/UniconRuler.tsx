import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconRuler = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M22.960022,7.4042969L16.5956421,1.039978c0,0-0.000061-0.000061-0.0001221-0.0001221c-0.1952515-0.1951294-0.5117188-0.1950684-0.7068481,0.0001221L1.039978,15.8886719c0,0.000061-0.000061,0.0001221-0.0001221,0.0001831c-0.1951294,0.1952515-0.1950684,0.5117188,0.0001221,0.7068481l6.3638306,6.3643188c0.09375,0.09375,0.2208862,0.1464844,0.3535156,0.1464233c0.1326294,0.000061,0.2597656-0.0526733,0.3535156-0.1464233l3.1810913-3.1809692c0.0003052-0.0003052,0.0006714-0.0003662,0.0009766-0.0006714s0.0003052-0.0006714,0.0006104-0.0009766l2.8266602-2.8264771c0.0002441-0.0002441,0.0006104-0.0003662,0.0008545-0.0006104s0.0003052-0.0006104,0.0005493-0.0008545l2.828064-2.8279419c0.0001221-0.0001221,0.0003052-0.0001831,0.0004272-0.0003052s0.0001221-0.0003052,0.0002441-0.0004272l2.8277588-2.8276367c0.000061-0.000061,0.000061,0,0.0001221-0.000061s0-0.000061,0.000061-0.0001221l3.1817627-3.1816406l0.0001831-0.0001831C23.1553345,7.9158936,23.1552124,7.5994263,22.960022,7.4042969z M19.4247437,10.2324219l-1.7675171-1.7675171c-0.0023804-0.0024414-0.0047607-0.0048218-0.0071411-0.0071411c-0.1972046-0.1932373-0.5137329-0.1900635-0.7069702,0.0071411c-0.1932983,0.1971436-0.1901245,0.5137329,0.0070801,0.7069702l1.7675171,1.7675171l-2.1212158,2.1211548l-3.1824951-3.1815796c-0.0023804-0.0024414-0.0047607-0.0048218-0.0071411-0.0072021c-0.1972046-0.1932373-0.5137939-0.1900635-0.7070312,0.0072021c-0.1932373,0.1972046-0.1900635,0.5137329,0.0071411,0.7069702l3.1824951,3.1815796l-2.1219482,2.1218872L12,14.1210938c-0.194397-0.1904907-0.5054321-0.1904907-0.6998291,0c-0.1972046,0.1932983-0.2004395,0.5098267-0.0071411,0.7070312l1.7674561,1.7683105l-2.1211548,2.1210938l-3.1820679-3.182312c-0.0023193-0.0024414-0.0046997-0.0048218-0.0071411-0.0072021c-0.1972046-0.1932373-0.5137329-0.1900635-0.7069702,0.0072021c-0.1932983,0.1972046-0.1900635,0.5137329,0.0071411,0.7069702l3.1819458,3.182373l-2.4749146,2.4748535l-5.6567383-5.6572266L16.2421875,2.1005859l5.6572266,5.6572266L19.4247437,10.2324219z"/>
  </svg>
);