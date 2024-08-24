import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconAngleRight = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M9.879 17.243a1 1 0 0 1-.707-1.707L12.707 12 9.172 8.464a1 1 0 0 1 1.414-1.414l4.242 4.243a1 1 0 0 1 0 1.414l-4.242 4.243a.997.997 0 0 1-.707.293Z"/>
  </svg>
);