import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconLayersAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M21 2H9a1 1 0 0 0-1 .999V7h8a1 1 0 0 1 1 .999V16h4a1 1 0 0 0 1-.999V3a1 1 0 0 0-.999-1H21z' }),createElement('path', { d: 'M3 12h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z' }),createElement('path', { d: 'M16 7H6a1 1 0 0 0-1 .999V12h6a1 1 0 0 1 1 .999V19h4a1 1 0 0 0 1-.999V8a1 1 0 0 0-.999-1H16z' }));
