import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconParagraph = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M13.5,14h-11C2.223877,14,2,14.223877,2,14.5S2.223877,15,2.5,15h11c0.276123,0,0.5-0.223877,0.5-0.5S13.776123,14,13.5,14z M21.5,9h-19C2.223877,9,2,9.223877,2,9.5S2.223877,10,2.5,10h19c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,9,21.5,9z"/>
  </svg>
);