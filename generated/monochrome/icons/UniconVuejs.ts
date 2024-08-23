import { createElement } from 'react';
import { UniconProps } from '../UniconProps';
export const UniconVuejs = ({ color='currentColor', size='24', ...others }: UniconProps) =>
  createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: size, height: size, viewBox: '0 0 24 24', fill: color, ...others },
    createElement('path', { d: 'm6.976 3.433 3.646.002 1.384 1.956 1.374-1.956 3.643-.001-5 8.406-5.047-8.407z' }),createElement('path', { d: 'M14.6 2.43a1 1 0 0 0-.819.425L12 5.39l-1.791-2.537a1 1 0 0 0-.817-.423H6.38l3.55 5.92 2.1 3.5 2.07-3.5 3.52-5.92H14.6z' }),createElement('path', { d: 'm22.001 2.438-4.384-.003L14.1 8.35l-2.07 3.5-2.1-3.5-3.546-5.913-4.39.024a1 1 0 0 0-.857 1.506l10.02 17.105a1 1 0 0 0 1.727-.002l9.98-17.128a1 1 0 0 0-.863-1.504z' }));
