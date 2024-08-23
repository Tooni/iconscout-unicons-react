import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconAnalysis = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M14 16a1 1 0 0 1-.707-1.707l7-7A.99989.99989 0 0 1 21.707 8.707l-7 7A.99676.99676 0 0 1 14 16zM3 17a1 1 0 0 1-.707-1.707l6-6A.99989.99989 0 0 1 9.707 10.707l-6 6A.99676.99676 0 0 1 3 17z' }),createElement('path', { d: 'M14,16a.99676.99676,0,0,1-.707-.293l-5-5A.99989.99989,0,0,1,9.707,9.293l5,5A1,1,0,0,1,14,16Z' }));
