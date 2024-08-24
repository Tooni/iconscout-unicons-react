import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconKeyholeSquareFull = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M14,10a2,2,0,1,0-3,1.7226V15a1,1,0,0,0,2,0V11.7226A1.99146,1.99146,0,0,0,14,10Z"/><path className="uim-tertiary" d="M21,2H3A.99943.99943,0,0,0,2,3V21a.99943.99943,0,0,0,1,1H21a.99943.99943,0,0,0,1-1V3A.99943.99943,0,0,0,21,2Zm-8,9.7226V15a1,1,0,0,1-2,0V11.7226a2,2,0,1,1,2,0Z"/>
  </svg>
);