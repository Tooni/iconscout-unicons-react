import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconCircleLayer = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M15.9785767,2.0682373C12.24823,1.5435181,8.7999268,4.0674438,8.1304321,7.7398682c-1.68573,0.9235229-2.8842773,2.6325073-3.0863037,4.6583252C3.2549438,13.159668,2,14.9328613,2,17c0,2.7614136,2.2385864,5,5,5c2.0722656-0.0024414,3.848938-1.2640991,4.6074219-3.0608521c2.0092163-0.2043457,3.7090454-1.3869629,4.6349487-3.0748291c2.9605713-0.5343018,5.2675171-2.8942871,5.6894531-5.8937378C22.4700317,6.1444702,19.8046875,2.6065063,15.9785767,2.0682373z M7,21c-2.2091675,0-4-1.7908325-4-4s1.7908325-4,4-4c2.208252,0.0021973,3.9978027,1.791748,4,4C11,19.2091675,9.2091675,21,7,21z M11.9072266,17.9111328C11.9622192,17.6148682,11.9996338,17.3121338,12,17c0-2.7614136-2.2385864-5-5-5c-0.3123779,0-0.6153564,0.0371094-0.9118652,0.0919189c0.3754272-2.0386353,1.97052-3.6339111,4.0092163-4.0092773c2.7141113-0.4998169,5.319397,1.2952271,5.8192139,4.0092773C16.4163208,14.8060303,14.6212769,17.411377,11.9072266,17.9111328z M16.7275391,14.7392578c0,0-0.0119629,0.0183716-0.0203247,0.03125c0.1520996-0.4888306,0.2658691-0.9943237,0.2877808-1.5282593c0.1356812-3.309082-2.4368896-6.1016235-5.7459717-6.2372437c-0.6914673-0.0283813-1.3578491,0.0675659-1.9846802,0.2577515c0.581604-1.925293,2.0890503-3.4313354,4.0157471-4.0096436c3.171814-0.9520264,6.5148315,0.8475342,7.4667969,4.0193481S19.899353,13.7872925,16.7275391,14.7392578z' }));
