import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconGripHorizontalLine = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M2.5,11h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,10,21.5,10h-19C2.223877,10,2,10.223877,2,10.5S2.223877,11,2.5,11z M21.5,14h-19C2.223877,14,2,14.223877,2,14.5S2.223877,15,2.5,15h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,14,21.5,14z"/>
  </svg>
);