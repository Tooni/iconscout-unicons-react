import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconArrowFromTop = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M15.29,16.29,13,18.59V7a1,1,0,0,0-2,0V18.59l-2.29-2.3a1,1,0,1,0-1.42,1.42l4,4a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42ZM19,2H5A1,1,0,0,0,5,4H19a1,1,0,0,0,0-2Z"/>
  </svg>
);