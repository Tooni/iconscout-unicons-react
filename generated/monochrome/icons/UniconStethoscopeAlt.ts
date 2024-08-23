import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconStethoscopeAlt = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'M8 15a.998.998 0 0 1-.625-.22l-3.499-2.798A4.975 4.975 0 0 1 2 8.078V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v4.078a2.985 2.985 0 0 0 1.126 2.342L8 12.72l2.875-2.3A2.986 2.986 0 0 0 12 8.078V4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v5.078a4.976 4.976 0 0 1-1.876 3.904l-3.5 2.799A.998.998 0 0 1 8 15zm11-1a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3z' }),createElement('path', { d: 'M19 14a2.965 2.965 0 0 1-1-.184V15.5a4.5 4.5 0 0 1-9 0v-1.02l-.375.3a1 1 0 0 1-1.25 0L7 14.48v1.02a6.5 6.5 0 0 0 13 0v-1.684A2.965 2.965 0 0 1 19 14Z' }));
