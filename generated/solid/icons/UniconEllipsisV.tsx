import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconEllipsisV = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z M12,7c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,7,12,7z M12,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,17,12,17z"/>
  </svg>
);