import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconVuejsAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M12.018 19.151 4.315 6h2.823l4.886 8.407L16.871 6h2.809z"/><path className="uim-primary" d="m14.38 4.001-2.374 3.956-2.384-3.956H.825L12.02 23.115 23.161 4H14.38zm-2.362 15.15L4.315 6h2.823l4.886 8.407L16.871 6h2.809l-7.662 13.151z"/>
  </svg>
);