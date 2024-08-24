import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconColumns = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-quaternary" d="M11 2h2v20h-2z"/><path className="uim-primary" d="M3 2h8v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path className="uim-tertiary" d="M13 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-8V2z"/>
  </svg>
);