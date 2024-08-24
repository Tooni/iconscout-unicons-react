import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconHospital = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M12.5 14.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-5-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm10-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"/><path className="uim-primary" d="M13.5 7H13v-.5a1 1 0 0 0-2 0V7h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V9h.5a1 1 0 0 0 0-2Z"/><path className="uim-quaternary" d="M21.5 6.5h-3v-4a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v4h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1Zm-14 12h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm5 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm1-5.5H13v.5a1 1 0 0 1-2 0V9h-.5a1 1 0 0 1 0-2h.5v-.5a1 1 0 0 1 2 0V7h.5a1 1 0 0 1 0 2Zm4 9.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Z"/>
  </svg>
);