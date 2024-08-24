import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconOkta = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M11.998 2a10 10 0 1 0 10 10 9.995 9.995 0 0 0-10-10Zm0 15.01a5.01 5.01 0 1 1 5.01-5.01 5.014 5.014 0 0 1-5.01 5.01Z"/>
  </svg>
);