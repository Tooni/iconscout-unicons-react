import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconHospitalSquareSign = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M16,17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4h-4v4c0,0.6-0.4,1-1,1s-1-0.4-1-1V7c0-0.6,0.4-1,1-1s1,0.4,1,1v4h4V7c0-0.6,0.4-1,1-1s1,0.4,1,1V17z"/>
  </svg>
);