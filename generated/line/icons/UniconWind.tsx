import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconWind = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M3.5,9a1,1,0,1,0-1-1A1,1,0,0,0,3.5,9Zm4,0h7a3,3,0,0,0,0-6,3.06,3.06,0,0,0-1.5.4,1,1,0,0,0-.37,1.37A1,1,0,0,0,14,5.13,1.09,1.09,0,0,1,14.5,5a1,1,0,0,1,0,2h-7a1,1,0,0,0,0,2Zm-4,4h7a1,1,0,0,0,0-2h-7a1,1,0,0,0,0,2Zm17-4a1,1,0,1,0-1-1A1,1,0,0,0,20.5,9Zm-2,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6Zm-6,4h-4a1,1,0,0,0,0,2h4a1,1,0,0,1,0,2,1.09,1.09,0,0,1-.5-.13,1,1,0,1,0-1,1.73,3.06,3.06,0,0,0,1.5.4,3,3,0,0,0,0-6Zm-8,0h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/>
  </svg>
);