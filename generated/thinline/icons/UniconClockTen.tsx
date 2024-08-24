import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconClockTen = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M12,6.5c-0.276123,0-0.5,0.223877-0.5,0.5v4.1337891l-1.8476562-1.0664062C9.4133911,9.9293213,9.1077881,10.0110474,8.9697266,10.25s-0.0563354,0.5445557,0.1826172,0.6826172l2.5976562,1.5C11.8259277,12.4767456,11.9121704,12.5,12,12.5c0.2759399-0.0004883,0.4995117-0.2240601,0.5-0.5V7C12.5,6.723877,12.276123,6.5,12,6.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z"/>
  </svg>
);