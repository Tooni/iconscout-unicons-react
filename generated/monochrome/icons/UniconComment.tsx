import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconComment = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M12 22H3a1 1 0 0 1-.707-1.707l1.964-1.964A10 10 0 1 1 12 22Z"/>
  </svg>
);