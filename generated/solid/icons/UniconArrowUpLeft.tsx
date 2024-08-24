import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconArrowUpLeft = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M9.4,8H17c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,6,6,6.4,6,7v10c0,0.6,0.4,1,1,1s1-0.4,1-1V9.4l8.3,8.3c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L9.4,8z"/>
  </svg>
);