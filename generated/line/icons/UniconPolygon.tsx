import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconPolygon = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21.87,11.5l-4.5-7.79a1,1,0,0,0-.87-.5h-9a1,1,0,0,0-.87.5L2.13,11.5a1,1,0,0,0,0,1l4.5,7.79a1,1,0,0,0,.87.5h9a1,1,0,0,0,.87-.5l4.5-7.79A1,1,0,0,0,21.87,11.5Zm-6,7.29H8.08L4.15,12,8.08,5.21h7.84L19.85,12Z"/>
  </svg>
);