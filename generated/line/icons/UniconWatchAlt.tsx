import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconWatchAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M17,8.61,16,2.84A1,1,0,0,0,15,2H9a1,1,0,0,0-1,.84l-1,5.77a6,6,0,0,0,0,6.78l1,5.77A1,1,0,0,0,9,22h6a1,1,0,0,0,1-.84l1-5.77a6,6,0,0,0,0-6.78ZM9.85,4h4.3l.44,2.59a6,6,0,0,0-5.18,0Zm4.3,16H9.85l-.44-2.59a6,6,0,0,0,5.18,0ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/>
  </svg>
);