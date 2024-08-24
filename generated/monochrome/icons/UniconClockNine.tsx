import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconClockNine = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M12 6a1 1 0 0 0-1 1v4H9a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/><path className="uim-tertiary" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h2V7a1 1 0 0 1 2 0Z"/>
  </svg>
);