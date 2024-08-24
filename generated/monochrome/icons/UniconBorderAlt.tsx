import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconBorderAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M3.5 20.5a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-15v15a1 1 0 0 1-1 1Z"/><circle cx="19.5" cy="11.5" r="1" className="uim-tertiary"/><circle cx="19.5" cy="7.5" r="1" className="uim-tertiary"/><circle cx="19.5" cy="15.5" r="1" className="uim-tertiary"/><circle cx="7.5" cy="19.5" r="1" className="uim-tertiary"/><circle cx="11.5" cy="19.5" r="1" className="uim-tertiary"/><circle cx="15.5" cy="19.5" r="1" className="uim-tertiary"/><circle cx="19.5" cy="19.5" r="1" className="uim-tertiary"/>
  </svg>
);