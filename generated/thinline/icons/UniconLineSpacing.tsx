import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconLineSpacing = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M9.5,8h12C21.776123,8,22,7.776123,22,7.5S21.776123,7,21.5,7h-12C9.223877,7,9,7.223877,9,7.5S9.223877,8,9.5,8z M6.0410156,16.1708984l-0.8740234,0.99823V6.8308105l0.8740234,0.998291C6.1356201,7.9378662,6.2728271,8.0002441,6.4169922,8c0.1209106-0.0001221,0.2376709-0.0440063,0.3286743-0.1235962c0.2078857-0.1817627,0.2290649-0.4976196,0.0473633-0.7055054l-1.75-2c-0.0073242-0.0077515-0.0148926-0.0153198-0.022644-0.022644C4.8127441,4.953125,4.486145,4.9632568,4.2910156,5.1708984l-1.75,2C2.3592529,7.37854,2.380249,7.6942139,2.5878906,7.8759766s0.5233765,0.1607666,0.7051392-0.046875l0.8739624-0.99823v10.3383179l-0.8740234-0.998291c-0.1817627-0.2076416-0.4974365-0.2286377-0.7050781-0.046875s-0.2286377,0.4974365-0.046875,0.7050781l1.75,2C4.3857422,18.9376831,4.5228882,19,4.6669922,19c0.144165,0,0.28125-0.0623169,0.3760376-0.1708984l1.75-2c0.1817017-0.2076416,0.1607056-0.5233154-0.046936-0.7050781S6.2227783,15.9632568,6.0410156,16.1708984z M21.5,17h-12C9.223877,17,9,17.223877,9,17.5S9.223877,18,9.5,18h12c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,17,21.5,17z M21.5,12h-12C9.223877,12,9,12.223877,9,12.5S9.223877,13,9.5,13h12c0.276123,0,0.5-0.223877,0.5-0.5S21.776123,12,21.5,12z"/>
  </svg>
);