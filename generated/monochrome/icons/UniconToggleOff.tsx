import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconToggleOff = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M16.5 17.5h-9a5.5 5.5 0 1 1 0-11h9a5.5 5.5 0 1 1 0 11z"/><circle cx="7.5" cy="12" r="2.5" className="uim-primary"/>
  </svg>
);