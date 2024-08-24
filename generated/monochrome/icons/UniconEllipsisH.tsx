import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconEllipsisH = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <circle cx="12" cy="12" r="2" className="uim-primary"/><circle cx="5" cy="12" r="2" className="uim-primary"/><circle cx="19" cy="12" r="2" className="uim-primary"/>
  </svg>
);