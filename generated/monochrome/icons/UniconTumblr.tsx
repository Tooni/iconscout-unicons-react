import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconTumblr = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M16.785 17.974a4.729 4.729 0 0 1-1.614.346 1.755 1.755 0 0 1-1.925-1.972v-6.226h4.017V7.095H13.26V2h-2.93a.157.157 0 0 0-.143.15 6.12 6.12 0 0 1-3.935 5.389v2.583h2.024v6.536c0 2.236 1.65 5.415 6.007 5.34a5.337 5.337 0 0 0 3.463-1.17l-.962-2.854" data-name="Brand Logos"/>
  </svg>
);