import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconTimesCircle = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path d="M12.0119629,2.0039062C6.491272,2.0006104,2.0131836,6.4733276,2.0098877,11.9940186S6.4793091,21.9927979,12,21.9960938c2.6522827,0.0043335,5.1970215-1.0482178,7.0712891-2.9248047c1.875-1.8734131,2.9291992-4.4147949,2.9307861-7.0653076C22.0053711,6.4852905,17.5326538,2.0072021,12.0119629,2.0039062z M12.0122681,20.9960938c-4.9684448,0.0033569-8.9988403-4.0215454-9.0022583-8.9899902C3.0066528,7.0377197,7.0316162,3.0072632,12,3.0039062c2.387085-0.0042725,4.6774292,0.9428711,6.3642578,2.6318359c1.687439,1.6858521,2.6363525,3.9728394,2.6379395,6.3581543C21.0056152,16.9622803,16.9806519,20.9926758,12.0122681,20.9960938z M12.7069702,12l3.1816406-3.1816406c0.1905518-0.194397,0.1905518-0.5054932,0-0.6998901c-0.1932373-0.1972046-0.5097656-0.2003784-0.7069702-0.0071411L12,11.2929688L8.8183594,8.1113892c-0.194397-0.1904907-0.5054932-0.1904907-0.6998901,0C7.9212646,8.3046265,7.9180908,8.6211548,8.1113281,8.8183594L11.2929688,12l-3.1816406,3.1816406c-0.09375,0.09375-0.1463623,0.2208862-0.1464233,0.3534546c0,0.276123,0.2238159,0.5,0.499939,0.500061c0.1326294,0.0001831,0.2598877-0.0525513,0.3535156-0.1464844L12,12.7070312l3.1816406,3.1816406c0.0936279,0.0939331,0.2208862,0.1466675,0.3535156,0.1464844v0.000061c0.1325684-0.000061,0.2596436-0.0527344,0.3533936-0.1464233c0.1953125-0.1952515,0.1953125-0.5118408,0.000061-0.7071533L12.7069702,12z"/>
  </svg>
);