import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconStethoscope = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M19 14a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zM8 15a6.007 6.007 0 0 1-6-6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v5a4 4 0 0 0 8 0V4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v6a6.007 6.007 0 0 1-6 6z"/><path className="uim-primary" d="M19 14a2.965 2.965 0 0 1-1-.184V15.5a4.5 4.5 0 0 1-9 0v-.59a5.58 5.58 0 0 1-2 0v.59a6.5 6.5 0 0 0 13 0v-1.684A2.965 2.965 0 0 1 19 14Z"/>
  </svg>
);