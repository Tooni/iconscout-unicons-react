import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconCornerRightDown = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M21.707 13.35a1 1 0 0 0-1.414 0l-2.921 2.921V8.314a4.005 4.005 0 0 0-4-4H3a1 1 0 0 0 0 2h10.372a2.002 2.002 0 0 1 2 2v7.958L12.45 13.35a1 1 0 0 0-1.414 1.414l4.628 4.628a1.004 1.004 0 0 0 1.415 0l4.628-4.628a1 1 0 0 0 0-1.414Z"/>
  </svg>
);