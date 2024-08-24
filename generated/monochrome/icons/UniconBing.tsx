import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconBing = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <polygon className="uim-secondary" style="isolation:isolate" points="10.129 8.596 11.864 12.924 14.634 14.214 14.634 14.214 19 16.247 19 11.7 10.129 8.596"/><polygon className="uim-primary" points="14.634 14.214 14.634 14.214 9 17.457 9 3.4 5 2 5 19.76 9 22 19 16.247 19 11.7 14.634 14.214"/>
  </svg>
);