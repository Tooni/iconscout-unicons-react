import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconGoogleDrive = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-quaternary" d="M15.334 14.887H22l-6.666-11.55H8.667l6.667 11.55z"/><path className="uim-primary" d="M8.667 3.338 2 14.888l3.334 5.774L12 9.112z"/><path className="uim-tertiary" d="m8.667 14.887-3.333 5.775h13.333L22 14.887z"/>
  </svg>
);