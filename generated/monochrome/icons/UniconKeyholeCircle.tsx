import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconKeyholeCircle = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M14 10a2 2 0 1 0-3 1.723V15a1 1 0 0 0 2 0v-3.277A1.991 1.991 0 0 0 14 10Z"/><path className="uim-tertiary" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 9.723V15a1 1 0 0 1-2 0v-3.277a2 2 0 1 1 2 0Z"/>
  </svg>
);