import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconFacebook = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="M12.683 22v-7.745h-2.607v-3.018h2.607V9.01a3.637 3.637 0 0 1 3.882-3.99c.778-.003 1.555.037 2.329.119v2.7h-1.599c-1.253 0-1.495.596-1.495 1.47v1.927h2.989l-.39 3.018h-2.6V22h-3.116z"/><path className="uim-primary" d="M20.999 2H2.998a1 1 0 0 0-1 1v18.001a1 1 0 0 0 1 1h18.001a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-2.105 5.84h-1.599c-1.253 0-1.495.596-1.495 1.47v1.926h2.989l-.39 3.019h-2.6V22h-3.116v-7.745h-2.607v-3.019h2.607V9.01a3.637 3.637 0 0 1 3.882-3.99 21.37 21.37 0 0 1 2.329.12v2.7z"/>
  </svg>
);