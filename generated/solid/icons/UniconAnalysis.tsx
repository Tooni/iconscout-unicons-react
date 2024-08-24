import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconAnalysis = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21.7,7.3c-0.4-0.4-1-0.4-1.4,0L14,13.6L9.7,9.3C9.5,9.1,9.3,9,9,9C8.7,9,8.5,9.1,8.3,9.3l-6,6C2.1,15.5,2,15.7,2,16c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3L9,11.4l4.3,4.3c0.1,0.1,0.2,0.2,0.3,0.2C13.7,16,13.9,16,14,16c0.2,0,0.5-0.1,0.6-0.3c0,0,0,0,0.1,0c0,0,0,0,0,0s0,0,0,0l7-7C22.1,8.3,22.1,7.7,21.7,7.3z"/>
  </svg>
);