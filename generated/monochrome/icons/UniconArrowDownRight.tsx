import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconArrowDownRight = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M17 18H7a1 1 0 0 1 0-2h9V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1Z"/><path className="uim-primary" d="M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18Z"/>
  </svg>
);