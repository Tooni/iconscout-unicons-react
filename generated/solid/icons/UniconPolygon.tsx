import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconPolygon = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21.9,11.5l-4.5-7.8c-0.2-0.3-0.5-0.5-0.9-0.5h-9c-0.4,0-0.7,0.2-0.9,0.5l-4.5,7.8c-0.2,0.3-0.2,0.7,0,1l4.5,7.8c0.2,0.3,0.5,0.5,0.9,0.5h9c0.4,0,0.7-0.2,0.9-0.5l4.5-7.8C22,12.2,22,11.8,21.9,11.5z"/>
  </svg>
);