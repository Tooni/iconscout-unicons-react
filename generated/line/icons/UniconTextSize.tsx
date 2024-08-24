import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconTextSize = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M9,11H3a1,1,0,0,0,0,2H5v5a1,1,0,0,0,2,0V13H9a1,1,0,0,0,0-2ZM21,5H9A1,1,0,0,0,9,7h5V18a1,1,0,0,0,2,0V7h5a1,1,0,0,0,0-2Z"/>
  </svg>
);