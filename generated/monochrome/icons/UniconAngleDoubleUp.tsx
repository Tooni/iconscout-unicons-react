import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconAngleDoubleUp = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M15 17.25a.997.997 0 0 1-.707-.293L12 14.664l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 17.25zm0-5.5a.997.997 0 0 1-.707-.293L12 9.164l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 11.75z"/>
  </svg>
);