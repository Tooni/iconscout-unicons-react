import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconThLarge = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M20,3H4C3.4,3,3,3.4,3,4v16c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V4C21,3.4,20.6,3,20,3z M19,11h-6V5h6V11z M11,5v6H5V5H11z M5,13h6v6H5V13z M13,19v-6h6v6H13z"/>
  </svg>
);