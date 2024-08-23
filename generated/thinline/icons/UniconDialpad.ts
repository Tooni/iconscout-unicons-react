import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconDialpad = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M7,10H2.9993896C2.7234497,10.0001831,2.4998169,10.223999,2.5,10.5v4.0005493C2.5001831,14.7765503,2.723999,15.0001831,3,15h4.0006104C7.2765503,14.9998169,7.5001831,14.776001,7.5,14.5v-4.0006104C7.4998169,10.2234497,7.276001,9.9998169,7,10z M6.5,14h-3v-3h3V14z M7,3H2.9993896C2.7234497,3.0001831,2.4998169,3.223999,2.5,3.5v4.0006104C2.5001831,7.7765503,2.723999,8.0001831,3,8h4.0006104C7.2765503,7.9998169,7.5001831,7.776001,7.5,7.5V3.4993896C7.4998169,3.2234497,7.276001,2.9998169,7,3z M6.5,7h-3V4h3V7z M14,3H9.9994507C9.7234497,3.0001831,9.4998169,3.223999,9.5,3.5v4.0006104C9.5001831,7.7765503,9.723999,8.0001831,10,8h4.0006104C14.2765503,7.9998169,14.5001831,7.776001,14.5,7.5V3.4993896C14.4998169,3.2234497,14.276001,2.9998169,14,3z M13.5,7h-3V4h3V7z M21,3h-4.0005493C16.7234497,3.0001831,16.4998169,3.223999,16.5,3.5v4.0006104C16.5001831,7.7765503,16.723999,8.0001831,17,8h4.0006104C21.2765503,7.9998169,21.5001831,7.776001,21.5,7.5V3.4993896C21.4998169,3.2234497,21.276001,2.9998169,21,3z M20.5,7h-3V4h3V7z M14,17H9.9994507C9.7234497,17.0001831,9.4998169,17.223999,9.5,17.5v4.0005493C9.5001831,21.7765503,9.723999,22.0001831,10,22h4.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-4.0006104C14.4998169,17.2234497,14.276001,16.9998169,14,17z M13.5,21h-3v-3h3V21z M21,10h-4.0005493c-0.276001,0.0001831-0.4996338,0.223999-0.4994507,0.5v4.0005493C16.5001831,14.7765503,16.723999,15.0001831,17,15h4.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-4.0006104C21.4998169,10.2234497,21.276001,9.9998169,21,10z M20.5,14h-3v-3h3V14z M14,10H9.9994507C9.7234497,10.0001831,9.4998169,10.223999,9.5,10.5v4.0005493C9.5001831,14.7765503,9.723999,15.0001831,10,15h4.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-4.0006104C14.4998169,10.2234497,14.276001,9.9998169,14,10z M13.5,14h-3v-3h3V14z' }));
