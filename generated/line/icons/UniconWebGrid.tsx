import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconWebGrid = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM14,20H4V13H14Zm0-9H4V4H14Zm6,9H16V4h4Z"/>
  </svg>
);