import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconSquare = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <rect width="20" height="20" x="2" y="2" className="uim-primary" rx="1"/>
  </svg>
);