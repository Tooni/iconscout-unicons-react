import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconSubject = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M21 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 10H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm8-5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"/>
  </svg>
);