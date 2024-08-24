import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconGoogleDriveAlt = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="m6 19.796 3-5.197h12l-3 5.197H6z"/><path className="uim-quaternary" d="M15 14.599h6L15 4.204H9L15 14.6z"/><path className="uim-tertiary" d="m3 14.599 3 5.197L12 9.4 9 4.204 3 14.6z"/>
  </svg>
);