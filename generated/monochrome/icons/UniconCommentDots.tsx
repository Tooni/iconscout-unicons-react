import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconCommentDots = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <circle cx="12" cy="12" r="1" className="uim-primary"/><path className="uim-tertiary" d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20ZM8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"/><circle cx="8" cy="12" r="1" className="uim-primary"/><circle cx="16" cy="12" r="1" className="uim-primary"/>
  </svg>
);