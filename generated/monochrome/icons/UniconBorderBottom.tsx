import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconBorderBottom = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M20 21.5H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z"/><circle cx="12" cy="16.5" r="1" className="uim-tertiary"/><circle cx="12" cy="12.5" r="1" className="uim-tertiary"/><circle cx="12" cy="8.5" r="1" className="uim-tertiary"/><circle cx="12" cy="4.5" r="1" className="uim-tertiary"/><circle cx="4" cy="16.5" r="1" className="uim-tertiary"/><circle cx="4" cy="12.5" r="1" className="uim-tertiary"/><circle cx="4" cy="8.5" r="1" className="uim-tertiary"/><circle cx="4" cy="4.5" r="1" className="uim-tertiary"/><circle cx="8" cy="4.5" r="1" className="uim-tertiary"/><circle cx="16" cy="4.5" r="1" className="uim-tertiary"/><circle cx="8" cy="12.5" r="1" className="uim-tertiary"/><circle cx="16" cy="12.5" r="1" className="uim-tertiary"/><circle cx="20" cy="16.5" r="1" className="uim-tertiary"/><circle cx="20" cy="12.5" r="1" className="uim-tertiary"/><circle cx="20" cy="8.5" r="1" className="uim-tertiary"/><circle cx="20" cy="4.5" r="1" className="uim-tertiary"/>
  </svg>
);