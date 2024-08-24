import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconExclamationCircle = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <circle cx="12" cy="12" r="10" className="uim-tertiary"/><circle cx="12" cy="16" r="1" className="uim-primary"/><path className="uim-primary" d="M12 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"/>
  </svg>
);