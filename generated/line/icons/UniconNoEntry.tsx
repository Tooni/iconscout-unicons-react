import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconNoEntry = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21,20H19.76L15.37,4.2A3,3,0,0,0,12.48,2h-1A3,3,0,0,0,8.63,4.2L4.24,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM10.56,4.73a1,1,0,0,1,1-.73h1a1,1,0,0,1,1,.73L14.35,8H9.65ZM9.09,10h5.82L16,14H8ZM6.32,20l1.11-4h9.14l1.11,4Z"/>
  </svg>
);