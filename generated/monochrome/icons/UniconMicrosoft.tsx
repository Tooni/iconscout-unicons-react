import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconMicrosoft = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <rect width="9.503" height="9.503" x="2" y="2" className="uim-primary"/><rect width="9.503" height="9.503" x="12.493" y="2" className="uim-primary"/><rect width="9.503" height="9.503" x="2" y="12.497" className="uim-primary"/><rect width="9.503" height="9.503" x="12.493" y="12.497" className="uim-primary"/>
  </svg>
);