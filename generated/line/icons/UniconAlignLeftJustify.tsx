import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconAlignLeftJustify = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M3,5H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,5ZM15,19H3a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Zm6-8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3A1,1,0,0,0,3,9H21a1,1,0,0,0,0-2Zm0,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/>
  </svg>
);