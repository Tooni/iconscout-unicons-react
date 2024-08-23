import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconLayersAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21.5,2h-13C8.4998169,2,8.4996338,2,8.4994507,2C8.2234497,2.0001831,7.9998169,2.223999,8,2.5V7H5.5C5.4998169,7,5.4996338,7,5.4993896,7C5.2234497,7.0001831,4.9998169,7.223999,5,7.5V12H2.5c-0.0001831,0-0.0003662,0-0.0006104,0C2.2234497,12.0001831,1.9998169,12.223999,2,12.5v9c0,0.0001831,0,0.0003662,0,0.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h9c0.0001831,0,0.0003662,0,0.0006104,0C11.7765503,21.9998169,12.0001831,21.776001,12,21.5V19h4.5c0.0001831,0,0.0003662,0,0.0006104,0C16.7765503,18.9998169,17.0001831,18.776001,17,18.5V16h4.5c0.0001831,0,0.0003662,0,0.0006104,0C21.7765503,15.9998169,22.0001831,15.776001,22,15.5v-13c0-0.0001831,0-0.0003662,0-0.0006104C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z M11,18.5v0.0005493V21H3v-8h2.5H11V18.5z M16,15.5v0.0005493V18h-4v-5.5c0-0.0001831,0-0.0003662,0-0.0006104C11.9998169,12.2234497,11.776001,11.9998169,11.5,12H6V8h2.5H16V15.5z M21,15h-4V7.5c0-0.0001831,0-0.0003662,0-0.0006104C16.9998169,7.2234497,16.776001,6.9998169,16.5,7H9V3h12V15z' }));
