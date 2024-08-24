import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconSignAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21.78,11.88l-2-2.5A1,1,0,0,0,19,9H13V3a1,1,0,0,0-2,0V4H5a1,1,0,0,0-.78.38l-2,2.5a1,1,0,0,0,0,1.24l2,2.5A1,1,0,0,0,5,11h6v9H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V16h6a1,1,0,0,0,.78-.38l2-2.5A1,1,0,0,0,21.78,11.88ZM11,9H5.48L4.28,7.5,5.48,6H11Zm7.52,5H13V11h5.52l1.2,1.5Z"/>
  </svg>
);