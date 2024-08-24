import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconVectorSquareAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M4 22a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002zM4 6a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002zM20 6a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002zM20 22a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002z"/><rect width="10" height="10" x="7" y="7" className="uim-tertiary" rx="1"/><path className="uim-quaternary" d="M18.278 5a1.936 1.936 0 0 1 0-2H5.722a1.936 1.936 0 0 1 0 2zM20 18a1.976 1.976 0 0 1 1 .278V5.722a1.936 1.936 0 0 1-2 0v12.556A1.976 1.976 0 0 1 20 18zM4 18a1.976 1.976 0 0 1 1 .278V5.722a1.936 1.936 0 0 1-2 0v12.556A1.976 1.976 0 0 1 4 18zm14.278 1H5.722a1.936 1.936 0 0 1 0 2h12.556a1.936 1.936 0 0 1 0-2z"/>
  </svg>
);