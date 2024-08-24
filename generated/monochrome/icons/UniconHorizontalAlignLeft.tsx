import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconHorizontalAlignLeft = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M16 10H4V6h11a1 1 0 0 1 1 1v3z"/><path className="uim-primary" d="M21 18H4v-8h17a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"/><path className="uim-quaternary" d="M3 22a1 1 0 0 1-1-.999V3a1 1 0 0 1 2 0v18a1 1 0 0 1-.999 1H3z"/>
  </svg>
);