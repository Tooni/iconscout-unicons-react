import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconToggleOn = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <circle cx="16.5" cy="12" r="2.5" className="uim-tertiary"/><path className="uim-primary" d="M16.5 6.5h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11zm0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);