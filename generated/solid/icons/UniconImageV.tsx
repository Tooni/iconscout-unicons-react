import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconImageV = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,13.9L18.1,12c-1.2-1.1-3.1-1.1-4.2,0L13,12.9L10.1,10c-1.2-1.1-3.1-1.1-4.2,0L4,11.9V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V13.9z"/>
  </svg>
);