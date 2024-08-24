import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconGrids = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M23 21V3a1 1 0 0 0-1-1h-5v20h5a1 1 0 0 0 1-1Z"/><path className="uim-primary" d="M1 3v18a1 1 0 0 0 1 1h5V2H2a1 1 0 0 0-1 1Z"/><path className="uim-tertiary" d="M9 2h6v20H9z"/><path className="uim-quaternary" d="M7 2h2v20H7zM15 2h2v20h-2z"/>
  </svg>
);