import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconSpaceKey = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21,9c-0.6,0-1,0.4-1,1v3H4v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-4C22,9.4,21.6,9,21,9z"/>
  </svg>
);