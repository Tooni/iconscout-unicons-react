import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconUserMd = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M17.998 8.064 6.003 8.11l-.277-3.325A3 3 0 0 1 8.17 1.482l.789-.143a17.031 17.031 0 0 1 6.086 0l.786.143a3 3 0 0 1 2.443 3.302Z"/><path className="uim-quaternary" d="M6.009 8.109a5.994 5.994 0 0 0 11.984-.045Z"/><path className="uim-primary" d="m17.198 13.385-4.49 4.49a1 1 0 0 1-1.415 0l-4.491-4.49a9.945 9.945 0 0 0-4.736 7.44 1 1 0 0 0 .994 1.108h17.88a1 1 0 0 0 .994-1.108 9.945 9.945 0 0 0-4.736-7.44Z"/><path className="uim-tertiary" d="M15.69 12.654a6.012 6.012 0 0 1-7.381 0 10.004 10.004 0 0 0-1.507.73l4.491 4.492a1 1 0 0 0 1.414 0l4.491-4.491a10.005 10.005 0 0 0-1.507-.731Z"/>
  </svg>
);