import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconMinus = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"/>
  </svg>
);