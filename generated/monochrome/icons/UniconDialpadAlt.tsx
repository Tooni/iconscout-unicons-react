import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconDialpadAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <rect width="4" height="4" x="10" y="6.955" className="uim-primary" rx=".545"/><rect width="4" height="4" x="10" y=".955" className="uim-primary" rx=".545"/><rect width="4" height="4" x="10" y="13.045" className="uim-primary" rx=".545"/><rect width="4" height="4" x="4" y="6.955" className="uim-primary" rx=".545"/><rect width="4" height="4" x="4" y=".955" className="uim-primary" rx=".545"/><rect width="4" height="4" x="4" y="13.045" className="uim-primary" rx=".545"/><rect width="4" height="4" x="16" y="6.955" className="uim-primary" rx=".545"/><rect width="4" height="4" x="16" y=".955" className="uim-primary" rx=".545"/><rect width="4" height="4" x="16" y="13.045" className="uim-primary" rx=".545"/><rect width="4" height="4" x="10" y="19" className="uim-primary" rx=".545"/>
  </svg>
);