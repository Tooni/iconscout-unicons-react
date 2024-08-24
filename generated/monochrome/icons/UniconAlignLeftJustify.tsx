import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconAlignLeftJustify = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M21 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-6 4H3a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/>
  </svg>
);