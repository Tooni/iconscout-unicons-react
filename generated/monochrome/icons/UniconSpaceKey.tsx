import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconSpaceKey = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M21 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h16v-3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"/>
  </svg>
);