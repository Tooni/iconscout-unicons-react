import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconCarWash = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M7.5,4a1,1,0,0,0,.71-.29l1-1A1,1,0,0,0,7.79,1.29l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,7.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,11.5,4Zm4,0a1,1,0,0,0,.71-.29l1-1a1,1,0,1,0-1.42-1.42l-1,1a1,1,0,0,0,0,1.42A1,1,0,0,0,15.5,4Zm2.42,11.62a.76.76,0,0,0-.09-.18l-.12-.15-.15-.12a.76.76,0,0,0-.18-.09.6.6,0,0,0-.19-.06,1,1,0,0,0-.9.27,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7.91.91,0,0,0,.33.22A1,1,0,0,0,17,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,17.92,15.62Zm1.84-4.51L18.4,7.05a3,3,0,0,0-2.84-2H8.44A3,3,0,0,0,5.6,7.05L4.24,11.11A3,3,0,0,0,2,14v4a3,3,0,0,0,2,2.82V22a1,1,0,0,0,2,0V21H18v1a1,1,0,0,0,2,0V20.82A3,3,0,0,0,22,18V14A3,3,0,0,0,19.76,11.11ZM7.49,7.68A1,1,0,0,1,8.44,7h7.12a1,1,0,0,1,1,.68L17.61,11H6.39ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm-7-3H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm-5.08.62a.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.09-.21,1,1,0,0,0-.33.21,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18A.64.64,0,0,0,6,15.8,1.36,1.36,0,0,0,6,16a1,1,0,0,0,1.71.7A1,1,0,0,0,8,16a1.36,1.36,0,0,0,0-.2A.64.64,0,0,0,7.92,15.62Z"/>
  </svg>
);