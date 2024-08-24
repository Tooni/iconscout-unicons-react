import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconBorderOut = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM5 19h14V5H5Z"/><circle cx="12" cy="12" r="1" className="uim-tertiary"/><circle cx="12" cy="16" r="1" className="uim-tertiary"/><circle cx="12" cy="8" r="1" className="uim-tertiary"/><circle cx="8" cy="12" r="1" className="uim-tertiary"/><circle cx="16" cy="12" r="1" className="uim-tertiary"/>
  </svg>
);