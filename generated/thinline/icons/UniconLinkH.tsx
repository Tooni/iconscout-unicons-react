import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconLinkH = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M10.5,16H7c-2.2091675,0-4-1.7908325-4-4s1.7908325-4,4-4h3.5C10.776123,8,11,7.776123,11,7.5S10.776123,7,10.5,7H7c-2.7614136,0-5,2.2385864-5,5s2.2385864,5,5,5h3.5c0.276123,0,0.5-0.223877,0.5-0.5S10.776123,16,10.5,16z M8,12c0,0.276123,0.223877,0.5,0.5,0.5h7c0.276123,0,0.5-0.223877,0.5-0.5s-0.223877-0.5-0.5-0.5h-7C8.223877,11.5,8,11.723877,8,12z M17,7h-3.5C13.223877,7,13,7.223877,13,7.5S13.223877,8,13.5,8H17c2.2091675,0,4,1.7908325,4,4s-1.7908325,4-4,4h-3.5c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5H17c2.7614136,0,5-2.2385864,5-5S19.7614136,7,17,7z"/>
  </svg>
);