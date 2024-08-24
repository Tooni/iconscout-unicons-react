import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconWindowSection = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M2,21c0,0.6,0.4,1,1,1h5V10H2V21z M16,22h5c0.6,0,1-0.4,1-1V10h-6V22z M10,22h4V10h-4V22z M21,2H3C2.4,2,2,2.4,2,3v5h20V3C22,2.4,21.6,2,21,2z"/>
  </svg>
);