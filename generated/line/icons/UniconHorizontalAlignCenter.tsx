import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconHorizontalAlignCenter = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21,10H19V7a1,1,0,0,0-1-1H13V3a1,1,0,0,0-2,0V6H6A1,1,0,0,0,5,7v3H3a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h8v3a1,1,0,0,0,2,0V18h8a1,1,0,0,0,1-1V11A1,1,0,0,0,21,10ZM7,8H17v2H7Zm13,8H4V12H20Z"/>
  </svg>
);