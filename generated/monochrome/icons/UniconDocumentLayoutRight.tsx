import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconDocumentLayoutRight = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M11 8H3a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"/><rect width="8" height="8" x="14" y="4" className="uim-primary" rx="1"/><path className="uim-tertiary" d="M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"/>
  </svg>
);