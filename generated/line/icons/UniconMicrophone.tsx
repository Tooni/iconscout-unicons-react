import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconMicrophone = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M12,15a4,4,0,0,0,4-4V5A4,4,0,0,0,8,5v6A4,4,0,0,0,12,15ZM10,5a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0Zm10,6a1,1,0,0,0-2,0A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8,8,0,0,0,7,7.93V21H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.93A8,8,0,0,0,20,11Z"/>
  </svg>
);