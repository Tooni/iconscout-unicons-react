import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconCompressAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21.71,2.29a1,1,0,0,0-1.42,0L14.5,8.09V6.5a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54,1,1,0,0,0,.38.08h4a1,1,0,0,0,0-2H15.91l5.8-5.79A1,1,0,0,0,21.71,2.29ZM10.88,12.58a1,1,0,0,0-.38-.08h-4a1,1,0,0,0,0,2H8.09l-5.8,5.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5.79-5.8V17.5a1,1,0,0,0,2,0v-4a1,1,0,0,0-.08-.38A1,1,0,0,0,10.88,12.58Z"/>
  </svg>
);