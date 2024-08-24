import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconSignalAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M5,18L5,18c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2C6,18.4,5.6,18,5,18z M10,14L10,14c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6C11,14.4,10.6,14,10,14z M20,2L20,2c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1s1-0.4,1-1V3C21,2.4,20.6,2,20,2z M15,9L15,9c-0.6,0-1,0.4-1,1v11c0,0.6,0.4,1,1,1s1-0.4,1-1V10C16,9.4,15.6,9,15,9z"/>
  </svg>
);