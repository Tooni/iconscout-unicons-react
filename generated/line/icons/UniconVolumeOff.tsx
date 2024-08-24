import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconVolumeOff = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M16.93,4.1a1,1,0,0,0-1,.12L11.15,8H7.5a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h3.65l4.73,3.78a1,1,0,0,0,.62.22.91.91,0,0,0,.43-.1,1,1,0,0,0,.57-.9V5A1,1,0,0,0,16.93,4.1ZM15.5,16.92l-3.38-2.7A1,1,0,0,0,11.5,14h-3V10h3a1,1,0,0,0,.62-.22l3.38-2.7Z"/>
  </svg>
);