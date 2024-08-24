import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconMasterCard = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M15.273 18.728A6.728 6.728 0 1 1 22 11.999V12a6.735 6.735 0 0 1-6.727 6.728z"/><path className="uim-primary" d="M8.727 18.728A6.728 6.728 0 1 1 15.455 12a6.735 6.735 0 0 1-6.728 6.728z"/>
  </svg>
);