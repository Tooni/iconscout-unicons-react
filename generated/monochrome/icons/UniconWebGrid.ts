import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconWebGrid = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21,22h-5l0,0V2l0,0h5c0.55228,0,1,0.44772,1,1v18C22,21.55228,21.55228,22,21,22z' }),createElement('path', { d: 'M14 22H3c-.55229 0-1-.44772-1-1v-8l0 0h12l0 0V22L14 22zM14 11H2l0 0V3c0-.55229.44771-1 1-1h11l0 0V11L14 11z' }));
