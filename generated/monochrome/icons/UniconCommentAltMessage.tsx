import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconCommentAltMessage = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M17 9H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm0 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"/><path className="uim-tertiary" d="M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3Zm-2 11H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm0-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"/>
  </svg>
);