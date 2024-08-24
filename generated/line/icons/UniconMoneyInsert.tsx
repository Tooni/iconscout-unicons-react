import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconMoneyInsert = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M10.46,6,11,5.41V9a1,1,0,0,0,2,0V5.41l.54.55A1,1,0,0,0,15,6a1,1,0,0,0,0-1.42L12.71,2.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21L9,4.54A1,1,0,0,0,10.46,6ZM12,12a3,3,0,1,0,3,3A3,3,0,0,0,12,12Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,16ZM5,15a1,1,0,1,0,1-1A1,1,0,0,0,5,15Zm14,0a1,1,0,1,0-1,1A1,1,0,0,0,19,15Zm1-7H16a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H8A1,1,0,0,0,8,8H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V11A3,3,0,0,0,20,8Z"/>
  </svg>
);