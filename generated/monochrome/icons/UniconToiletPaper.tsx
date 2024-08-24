import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconToiletPaper = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <ellipse cx="7" cy="7.993" className="uim-primary" rx="1" ry="1.25"/><path className="uim-tertiary" d="M7 2C4.243 2 2 4.691 2 8s2.243 6 5 6 5-2.691 5-6-2.243-6-5-6Zm0 7.243a1.146 1.146 0 0 1-1-1.25 1.146 1.146 0 0 1 1-1.25 1.146 1.146 0 0 1 1 1.25 1.146 1.146 0 0 1-1 1.25Z"/><path className="uim-quaternary" d="M22.76 20.35A7.504 7.504 0 0 1 21 15.459V8c0-3.309-2.243-6-5-6H7c2.757 0 5 2.691 5 6v7.459a9.507 9.507 0 0 0 2.24 6.191A1.001 1.001 0 0 0 15 22h7a1 1 0 0 0 .76-1.65Z"/><path className="uim-primary" d="M12 8c0 3.309-2.243 6-5 6h5Z"/>
  </svg>
);