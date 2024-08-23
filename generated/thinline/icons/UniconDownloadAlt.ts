import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconDownloadAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M8.1624146,13.6552734c-0.1972046,0.1932983-0.2003784,0.5098267-0.0071411,0.7070312l3.4912109,3.4912109C11.7401123,17.9474487,11.8673706,18.0001831,12,18c0.1326294,0.0001221,0.2598267-0.0525513,0.3535156-0.1464844l3.4912109-3.4912109c0.1904907-0.194397,0.1904907-0.5054321,0-0.6998291c-0.1932983-0.1972046-0.5098267-0.2004395-0.7070312-0.0072021L12.5,16.2929688V2.5C12.5,2.223877,12.276123,2,12,2s-0.5,0.223877-0.5,0.5v13.7929688l-2.6377563-2.6376953C8.6679077,13.4647827,8.3568115,13.4647827,8.1624146,13.6552734z M18,9h-1.5C16.223877,9,16,9.223877,16,9.5s0.223877,0.5,0.5,0.5H18c1.1040039,0.0014038,1.9985962,0.8959961,2,2v7c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H6c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-7c0.0014038-1.1040039,0.8959961-1.9985962,2-2h2.5C8.776123,10,9,9.776123,9,9.5S8.776123,9,8.5,9H6c-1.6561279,0.0018311-2.9981689,1.3438721-3,3v7c0.0018311,1.6561279,1.3438721,2.9981689,3,3h12c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-7C20.9981689,10.3438721,19.6561279,9.0018311,18,9z' }));
