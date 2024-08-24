import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconTriangle = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M21.9335938,20.0058594l-9.5-16.5097656c-0.0385132-0.0581055-0.0883179-0.1079102-0.1464233-0.1464233c-0.239502-0.1585693-0.5621948-0.0930176-0.7207642,0.1464233l-9.5,16.5097656c-0.0432739,0.0755615-0.06604,0.1610107-0.0661621,0.2480469C1.999939,20.5302734,2.2236938,20.7545776,2.5,20.7548828h19c0.0870361-0.0001221,0.1725464-0.0228882,0.2480469-0.0661621C21.987854,20.5513916,22.0709229,20.2456665,21.9335938,20.0058594z M3.3642578,19.7548828L12,4.7480469l8.6357422,15.0068359H3.3642578z"/>
  </svg>
);