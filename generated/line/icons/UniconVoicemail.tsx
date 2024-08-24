import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconVoicemail = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M18,8a4,4,0,0,0-4,4,3.91,3.91,0,0,0,.56,2H9.44A3.91,3.91,0,0,0,10,12a4,4,0,1,0-4,4H18a4,4,0,0,0,0-8ZM6,14a2,2,0,1,1,2-2A2,2,0,0,1,6,14Zm12,0a2,2,0,1,1,2-2A2,2,0,0,1,18,14Z"/>
  </svg>
);