import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconSliderH = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21,11H17.81573a2.98208,2.98208,0,0,0-5.63146,0H3a1,1,0,0,0,0,2h9.18433a2.982,2.982,0,0,0,5.6314,0H21a1,1,0,0,0,0-2Zm-6,2a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,15,13Z"/>
  </svg>
);