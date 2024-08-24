import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconDropbox = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" fill-rule="evenodd" d="M16.53 10.091 21 12.939l-4.502 2.868L12 12.941l-4.498 2.866L3 12.939l4.47-2.848L3 7.243l4.502-2.868L12 7.241l4.498-2.866L21 7.243z" clip-rule="evenodd"/><path className="uim-quaternary" fill-rule="evenodd" d="M16.467 10.091 12 7.245l-4.467 2.846L12 12.936z" clip-rule="evenodd"/><path className="uim-tertiary" fill-rule="evenodd" d="m7.531 16.757-.029-.95L12 12.941l4.498 2.866.036.95-4.502 2.868z" clip-rule="evenodd"/>
  </svg>
);