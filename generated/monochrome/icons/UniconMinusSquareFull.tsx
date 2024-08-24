import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconMinusSquareFull = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"/><path className="uim-tertiary" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-4 11H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"/>
  </svg>
);