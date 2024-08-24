import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconLockAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M9 7a3 3 0 1 1 6 0v2h2V7A5 5 0 0 0 7 7v2h2V7zM12 18a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1z"/><path className="uim-primary" d="M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm-4 8a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0v3z"/>
  </svg>
);