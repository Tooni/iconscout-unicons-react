import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconMouseAlt2 = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M12,2C8.1340332,2,5,5.1340332,5,9v6c0.0046997,3.8640747,3.1359253,6.9953003,7,7c3.8640747-0.0046997,6.9953003-3.1359253,7-7V9C19,5.1340332,15.8659668,2,12,2z M18,15c0,3.3137207-2.6862793,6-6,6s-6-2.6862793-6-6V9c0.003418-3.1433716,2.4224854-5.7166138,5.5-5.9742432v9.4752197c0,0.0001831,0,0.0004272,0,0.0006104c0.0001831,0.2759399,0.223999,0.4995728,0.5,0.4993896c0.0001831,0,0.0003662,0,0.0005493,0c0.276001-0.0001221,0.4996338-0.223999,0.4994507-0.5V3.0257568C15.5775146,3.2833862,17.996582,5.8566284,18,9V15z' }));
