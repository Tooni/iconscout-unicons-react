import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconBitcoinAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M16.313 11.24A3.998 3.998 0 0 0 13 5V4a1 1 0 0 0-2 0v1H9V4a1 1 0 0 0-2 0v1H6a1 1 0 0 0 0 2h1v10H6a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2a3.99 3.99 0 0 0 1.313-7.76ZM15 9a2.002 2.002 0 0 1-2 2H9V7h4a2.002 2.002 0 0 1 2 2Zm0 8H9v-4h6a2 2 0 0 1 0 4Z"/>
  </svg>
);