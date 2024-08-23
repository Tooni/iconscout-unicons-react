import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconFlipH = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M11.8154297,3.3828125L12,3.2011719l0.1845703,0.1816406c0.0934448,0.0921021,0.2193604,0.1436768,0.3505859,0.1435547c0.1340332,0,0.2623901-0.053833,0.3563843-0.149353c0.1936646-0.1968994,0.19104-0.5134277-0.0057983-0.7070923l-0.5351562-0.5263672c-0.194519-0.1914062-0.5066528-0.1914062-0.7011719,0l-0.5351562,0.5263672c-0.0029297,0.0028076-0.0057983,0.0056763-0.008667,0.0085449c-0.194519,0.1960449-0.1932983,0.5126343,0.0027466,0.7070923C11.3043823,3.5800781,11.6209106,3.5788574,11.8154297,3.3828125z M15.0966797,6.2470703c0.0934448,0.0921021,0.2194214,0.1436768,0.3505859,0.1435547c0.1340332,0,0.2623901-0.053833,0.3563843-0.149353c0.1936646-0.1968384,0.19104-0.5134277-0.0057983-0.7070923l-0.7939453-0.78125c-0.1958618-0.1882324-0.5061035-0.1856079-0.6987915,0.0057983c-0.1959229,0.1945801-0.1970215,0.5111694-0.0023804,0.7070923L15.0966797,6.2470703z M11.1552734,9h1.6894531c0.276123,0,0.5-0.223877,0.5-0.5s-0.223877-0.5-0.5-0.5h-1.6894531c-0.276123,0-0.5,0.223877-0.5,0.5S10.8791504,9,11.1552734,9z M17.3496094,9h0.75c0.1342163,0.000061,0.2628784-0.053833,0.3569336-0.1495972c0.1934204-0.1969604,0.1906128-0.5134277-0.0063477-0.7069092l-0.5341797-0.5263672c-0.1205444-0.1184692-0.2927246-0.1680298-0.4578247-0.1317749c-0.2697144,0.0592651-0.4403076,0.3259277-0.3810425,0.5956421c-0.1420288,0.0922241-0.2277222,0.2501221-0.2276001,0.4194336C16.8496704,8.7764893,17.0735474,9.0001221,17.3496094,9z M8.5527344,6.390625c0.1311646,0.0001221,0.2571411-0.0514526,0.3505859-0.1435547l0.7939453-0.78125c0.1914673-0.192688,0.1940308-0.5029907,0.0057983-0.6988525C9.5117188,4.5678711,9.1951904,4.5615845,8.9960938,4.7529297l-0.7939453,0.78125c-0.09552,0.0939941-0.149353,0.2223511-0.149353,0.3563843C8.0527344,6.166687,8.2766113,6.390564,8.5527344,6.390625z M21.5,11.5h-19C2.223877,11.5,2,11.723877,2,12s0.223877,0.5,0.5,0.5h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,11.5,21.5,11.5z M17.9287109,15H6.0712891c-0.1312256,0.0001831-0.2570801,0.0519409-0.3505249,0.144043c-0.1967163,0.1940308-0.1989746,0.5108032-0.0049438,0.7075195l5.9287109,6C11.7384644,21.9465332,11.8664551,21.999939,12,22c0.1335449-0.000061,0.2615356-0.0534668,0.3554688-0.1484375l5.9287109-6c0.0921021-0.0934448,0.1438599-0.2192993,0.144043-0.3505249C18.4286499,15.2247314,18.2050171,15.0004272,17.9287109,15z M12,20.7890625L7.2685547,16h9.4628906L12,20.7890625z M5.9003906,9h0.75c0.1693115,0.000061,0.3271484-0.0855713,0.4193726-0.2275391c0.1503296-0.2315063,0.0845947-0.5410156-0.1469116-0.6914062C6.9591675,7.9159546,6.9095459,7.7437744,6.7910767,7.62323C6.5974731,7.4263306,6.2809448,7.423584,6.0839844,7.6171875L5.5498047,8.1435547C5.4541016,8.2376099,5.4002075,8.3661499,5.4002686,8.5003662C5.4003906,8.7764282,5.6243286,9.0001221,5.9003906,9z' }));
