import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconDocumentLayoutCenter = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21 8h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm0 4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM5 8H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z' }),createElement('path', { d: 'M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z' }));
