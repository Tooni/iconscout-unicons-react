import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconCube = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M12 12.3 3.5 7.05 12 1.8l8.5 5.25z"/><path className="uim-quaternary" d="M12 22.2v-9.9l8.5-5.25v9.9z"/><path className="uim-tertiary" d="m12 22.2-8.5-5.25v-9.9L12 12.3z"/>
  </svg>
);