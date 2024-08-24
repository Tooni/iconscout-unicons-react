import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconMinusSquareFull = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M7.5,12.5h9c0.276123,0,0.5-0.223877,0.5-0.5s-0.223877-0.5-0.5-0.5h-9C7.223877,11.5,7,11.723877,7,12S7.223877,12.5,7.5,12.5z M21.5,2H2.4993896C2.2234497,2.0001831,1.9998169,2.223999,2,2.5v19.0005493C2.0001831,21.7765503,2.223999,22.0001831,2.5,22h19.0006104C21.7765503,21.9998169,22.0001831,21.776001,22,21.5V2.4993896C21.9998169,2.2234497,21.776001,1.9998169,21.5,2z M21,21H3V3h18V21z"/>
  </svg>
);