import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconLeftIndent = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm8 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8-4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"/><path className="uim-primary" d="M21 14.666a.999.999 0 0 1-.64-.231l-2-1.667a1 1 0 0 1 0-1.536l2-1.667a1 1 0 0 1 1.64.769v3.333a1 1 0 0 1-1 1Z"/>
  </svg>
);