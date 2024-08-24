import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconAlignLeftJustify = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21,15H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,15,21,15z M15,19H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S15.6,19,15,19z M3,5h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,3,2,3.4,2,4S2.4,5,3,5z M21,7H3C2.4,7,2,7.4,2,8s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,7,21,7z M21,11H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,11,21,11z"/>
  </svg>
);