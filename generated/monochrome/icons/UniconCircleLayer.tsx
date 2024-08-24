import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconCircleLayer = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-quaternary" d="M15 2a6.998 6.998 0 0 0-6.88 5.737 6 6 0 0 1 8.143 8.143A6.997 6.997 0 0 0 15 2z"/><circle cx="7" cy="17" r="5" className="uim-primary"/><path className="uim-tertiary" d="M11 7a6 6 0 0 0-5.97 5.406 4.997 4.997 0 0 1 6.564 6.564A6 6 0 0 0 11 7z"/>
  </svg>
);