import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconArrowCircleLeft = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="m11.293 7.293-4 4a1.004 1.004 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 0 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414Z"/><path className="uim-tertiary" d="M2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm10.707-4.707a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 0 1 0 2h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1.004 1.004 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"/>
  </svg>
);