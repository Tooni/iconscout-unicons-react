import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconTemperatureMinus = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M14,5.5a4.5,4.5,0,0,0-9,0V13a6,6,0,0,0,3.21,9.83A7,7,0,0,0,9.49,23,6,6,0,0,0,14,13ZM12,20.11a4,4,0,0,1-5.32-6,1,1,0,0,0,.3-.71V5.5a2.5,2.5,0,0,1,5,0v7.94a1,1,0,0,0,.3.71,4,4,0,0,1-.28,6ZM10.5,15.28V5.5a1,1,0,0,0-2,0v9.78A2,2,0,0,0,7.5,17a2,2,0,0,0,4,0A2,2,0,0,0,10.5,15.28Zm9-12.78h-3a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z"/>
  </svg>
);