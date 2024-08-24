import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconHtml3 = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-tertiary" d="m17.476 6.123-.534 5.994.002.033-.002.074v-.001l-.38 4.192-.041.372L12 18.037v.001l-.004.003-4.512-1.258-.306-3.465h2.213l.157 1.762 2.453.665-.001.001 2.461-.675.261-2.869H9.576l-.044-.485-.101-1.136-.052-.611h5.538l.202-2.231H6.682l-.044-.485-.1-1.137-.053-.61h11.044z"/><path className="uim-primary" d="m3.195 2 1.602 17.994L11.989 22l7.212-2.013L20.805 2H3.195zm14.281 4.123-.534 5.994.002.033-.002.074v-.001l-.38 4.192-.041.372L12 18.037v.001l-.004.003-4.512-1.258-.306-3.465h2.213l.157 1.762 2.453.665-.001.001 2.461-.675.261-2.869H9.576l-.044-.485-.101-1.136-.052-.611h5.538l.202-2.231H6.682l-.044-.485-.1-1.137-.053-.61h11.044l-.053.616z"/>
  </svg>
);