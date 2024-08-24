import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconChartPie = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-quaternary" d="M12 12V2c5.523 0 10 4.477 10 10H12z"/><path className="uim-tertiary" d="m12 12 5 8.66A10.01 10.01 0 0 0 22 12H12z"/><path className="uim-primary" d="M17 20.66 12 12V2c-5.523.002-9.999 4.48-9.997 10.003.002 5.523 4.48 9.999 10.004 9.997A10 10 0 0 0 17 20.662l.003-.005-.004.003z"/>
  </svg>
);