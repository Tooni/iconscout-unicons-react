import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconCornerUpRight = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M19.4,6.9l-4.6-4.6c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l2.9,2.9h-8c-2.2,0-4,1.8-4,4V21c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1V10.6c0-1.1,0.9-2,2-2h8l-2.9,2.9c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l4.6-4.6c0,0,0,0,0,0C19.8,7.9,19.8,7.3,19.4,6.9z"/>
  </svg>
);