import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconTumblrSquare = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M13.571 17.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.817 3.817 0 0 0 2.454-3.363.099.099 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229 2.936 2.936 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z' }),createElement('path', { d: 'M2.019 2v20h19.963V2H2.019zm11.552 15.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.817 3.817 0 0 0 2.454-3.363.099.099 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229 2.936 2.936 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z' }));
