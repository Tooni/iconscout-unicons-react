import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconAngleDoubleLeft = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M16.25 16a.99676.99676 0 0 1-.707-.293l-3-3a.99962.99962 0 0 1 0-1.41406l3-3A.99989.99989 0 0 1 16.957 9.707L14.66406 12l2.293 2.293A1 1 0 0 1 16.25 16zM10.75 16a.99676.99676 0 0 1-.707-.293l-3-3a.99962.99962 0 0 1 0-1.41406l3-3A.99989.99989 0 0 1 11.457 9.707L9.16406 12l2.293 2.293A1 1 0 0 1 10.75 16z' }));
