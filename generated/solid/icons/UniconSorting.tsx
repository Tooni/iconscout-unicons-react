import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconSorting = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M15.7,17.8l-3-3c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l2.3-2.3l2.3,2.3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C16.1,18.8,16.1,18.2,15.7,17.8z M11.3,10.2c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l3-3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,8.1L9.7,5.8c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L11.3,10.2z"/>
  </svg>
);