import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconClockFive = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M12 6a1.003 1.003 0 0 1 1 1v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A.999.999 0 0 1 11 12V7a1.003 1.003 0 0 1 1-1Z"/><path className="uim-tertiary" d="M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12Zm9-5a1 1 0 0 1 2 0v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A.999.999 0 0 1 11 12Z"/>
  </svg>
);