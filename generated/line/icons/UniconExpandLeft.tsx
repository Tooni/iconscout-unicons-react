import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconExpandLeft = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M9.17,10.17a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L5.41,4H7A1,1,0,0,0,7,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41L8.46,9.88A1,1,0,0,0,9.17,10.17Zm6.37-1.71a1,1,0,0,0-1.42,0L8.46,14.12a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l5.66-5.66A1,1,0,0,0,15.54,8.46ZM21,16a1,1,0,0,0-1,1v1.59l-4.46-4.47a1,1,0,1,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V17A1,1,0,0,0,21,16Z"/>
  </svg>
);