import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconReceiptAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M10,8h6a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2ZM8,12h8a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Zm0,4h8a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2ZM20,2H4A1,1,0,0,0,3,3V21a1,1,0,0,0,1.6.8l2.07-1.55L8.73,21.8a1,1,0,0,0,1.2,0L12,20.25l2.07,1.55a1,1,0,0,0,1.2,0l2.06-1.55L19.4,21.8a1,1,0,0,0,1.05.09A1,1,0,0,0,21,21V3A1,1,0,0,0,20,2ZM19,19l-1.07-.8a1,1,0,0,0-1.2,0l-2.06,1.55L12.6,18.2a1,1,0,0,0-1.2,0L9.33,19.75,7.27,18.2a1,1,0,0,0-1.2,0L5,19V4H19Z"/>
  </svg>
);