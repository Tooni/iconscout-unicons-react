import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconDesktopSlash = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M10.66,6H18a1,1,0,0,1,1,1v6a.94.94,0,0,1-.14.5,1,1,0,0,0,.31,1.38.94.94,0,0,0,.53.16,1,1,0,0,0,.84-.46A2.94,2.94,0,0,0,21,13V7a3,3,0,0,0-3-3H10.66a1,1,0,0,0,0,2ZM21.71,20.29,5.86,4.45h0L3.71,2.29A1,1,0,0,0,2.29,3.71L3.69,5.1A3,3,0,0,0,3,7v6a3,3,0,0,0,3,3h5v2H7a1,1,0,0,0,0,2H17a1,1,0,0,0,.93-.66l2.36,2.37a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM6,14a1,1,0,0,1-1-1V7a1,1,0,0,1,.12-.46L12.59,14Zm7,4V16h1.59l2,2Z"/>
  </svg>
);