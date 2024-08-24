import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconStopCircle = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M15,8H9A1,1,0,0,0,8,9v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V9A1,1,0,0,0,15,8Zm-1,6H10V10h4ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
  </svg>
);