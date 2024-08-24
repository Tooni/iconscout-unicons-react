import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconLaptop = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21.5,15H20V7c-0.0018311-1.6561279-1.3438721-2.9981689-3-3H7C5.3438721,4.0018311,4.0018311,5.3438721,4,7v8H2.4993896C2.2234497,15.0001831,1.9998169,15.223999,2,15.5V17c0.0018311,1.6561279,1.3438721,2.9981689,3,3h14c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-1.5006104C21.9998169,15.2234497,21.776001,14.9998169,21.5,15z M5,7c0.0014038-1.1040039,0.8959961-1.9985962,2-2h10c1.1040039,0.0014038,1.9985962,0.8959961,2,2v8H5V7z M21,17c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-1h18V17z"/>
  </svg>
);