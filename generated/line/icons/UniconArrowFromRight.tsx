import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconArrowFromRight = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M3,4A1,1,0,0,0,2,5V19a1,1,0,0,0,2,0V5A1,1,0,0,0,3,4Zm18.92,7.62a1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L18.59,11H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33A1,1,0,0,0,21.92,11.62Z"/>
  </svg>
);