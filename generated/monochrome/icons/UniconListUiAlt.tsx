import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconListUiAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M21.5 8h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm0 5h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"/><circle cx="3.5" cy="7" r="1" className="uim-primary"/><circle cx="7.5" cy="12" r="1" className="uim-primary"/><circle cx="11.5" cy="17" r="1" className="uim-primary"/>
  </svg>
);