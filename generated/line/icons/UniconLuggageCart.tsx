import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconLuggageCart = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M2,13.5v2a1,1,0,0,0,1,1H13a3,3,0,0,0,6,0h2a1,1,0,0,0,1-1v-8a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3v7H4v-1a1,1,0,0,0-2,0Zm13,3a1,1,0,1,1,1,1A1,1,0,0,1,15,16.5Zm-7-6H20v4H18.22a3,3,0,0,0-4.44,0H8Zm0-3a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1v1H8Z"/>
  </svg>
);