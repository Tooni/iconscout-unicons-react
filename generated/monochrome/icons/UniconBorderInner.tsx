import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconBorderInner = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M19.965 13h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z"/><path className="uim-primary" d="M11.965 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1Z"/><circle cx="3.964" cy="16" r="1" className="uim-tertiary"/><circle cx="3.964" cy="20" r="1" className="uim-tertiary"/><circle cx="3.964" cy="8" r="1" className="uim-tertiary"/><circle cx="3.964" cy="4" r="1" className="uim-tertiary"/><circle cx="7.964" cy="4" r="1" className="uim-tertiary"/><circle cx="15.964" cy="4" r="1" className="uim-tertiary"/><circle cx="7.964" cy="20" r="1" className="uim-tertiary"/><circle cx="15.964" cy="20" r="1" className="uim-tertiary"/><circle cx="19.964" cy="16" r="1" className="uim-tertiary"/><circle cx="19.964" cy="20" r="1" className="uim-tertiary"/><circle cx="19.964" cy="8" r="1" className="uim-tertiary"/><circle cx="19.964" cy="4" r="1" className="uim-tertiary"/>
  </svg>
);