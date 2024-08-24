import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconAirplay = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <rect width="20" height="15" x="2" y="3" className="uim-tertiary" rx="3"/><path className="uim-primary" d="M16 21H8a1 1 0 0 1-.832-1.555l4-6a1.038 1.038 0 0 1 1.664 0l4 6A1 1 0 0 1 16 21Z"/>
  </svg>
);