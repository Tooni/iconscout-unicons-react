import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconBorderRight = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M20.5 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1Z"/><circle cx="16.5" cy="12" r="1" className="uim-tertiary"/><circle cx="12.5" cy="12" r="1" className="uim-tertiary"/><circle cx="8.5" cy="12" r="1" className="uim-tertiary"/><circle cx="4.5" cy="12" r="1" className="uim-tertiary"/><circle cx="16.5" cy="20" r="1" className="uim-tertiary"/><circle cx="12.5" cy="20" r="1" className="uim-tertiary"/><circle cx="8.5" cy="20" r="1" className="uim-tertiary"/><circle cx="4.5" cy="20" r="1" className="uim-tertiary"/><circle cx="4.5" cy="16" r="1" className="uim-tertiary"/><circle cx="4.5" cy="8" r="1" className="uim-tertiary"/><circle cx="12.5" cy="16" r="1" className="uim-tertiary"/><circle cx="12.5" cy="8" r="1" className="uim-tertiary"/><circle cx="16.5" cy="4" r="1" className="uim-tertiary"/><circle cx="12.5" cy="4" r="1" className="uim-tertiary"/><circle cx="8.5" cy="4" r="1" className="uim-tertiary"/><circle cx="4.5" cy="4" r="1" className="uim-tertiary"/>
  </svg>
);