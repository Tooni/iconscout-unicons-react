import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconMultiply = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M13.4,12l6.3-6.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l6.3,6.3l-6.3,6.3C4.1,18.5,4,18.7,4,19c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12z"/>
  </svg>
);