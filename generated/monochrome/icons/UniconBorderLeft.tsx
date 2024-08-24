import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconBorderLeft = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M3.5 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1Z"/><circle cx="7.5" cy="12" r="1" className="uim-tertiary"/><circle cx="11.5" cy="12" r="1" className="uim-tertiary"/><circle cx="15.5" cy="12" r="1" className="uim-tertiary"/><circle cx="19.5" cy="12" r="1" className="uim-tertiary"/><circle cx="7.5" cy="4" r="1" className="uim-tertiary"/><circle cx="11.5" cy="4" r="1" className="uim-tertiary"/><circle cx="15.5" cy="4" r="1" className="uim-tertiary"/><circle cx="19.5" cy="4" r="1" className="uim-tertiary"/><circle cx="19.5" cy="8" r="1" className="uim-tertiary"/><circle cx="19.5" cy="16" r="1" className="uim-tertiary"/><circle cx="11.5" cy="8" r="1" className="uim-tertiary"/><circle cx="11.5" cy="16" r="1" className="uim-tertiary"/><circle cx="7.5" cy="20" r="1" className="uim-tertiary"/><circle cx="11.5" cy="20" r="1" className="uim-tertiary"/><circle cx="15.5" cy="20" r="1" className="uim-tertiary"/><circle cx="19.5" cy="20" r="1" className="uim-tertiary"/>
  </svg>
);