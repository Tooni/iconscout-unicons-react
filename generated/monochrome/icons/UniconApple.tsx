import React from 'react';
import { UniconProps } from '../UniconProps';

export const UniconApple = ({ size=24, color='currentColor', ...others }: UniconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...others}>
    <path className="uim-primary" d="M17.458 12.625A4.523 4.523 0 0 1 19.62 8.82a4.672 4.672 0 0 0-3.658-1.984c-1.558-.158-3.04.917-3.829.917-.79 0-2.009-.894-3.3-.87a4.896 4.896 0 0 0-4.14 2.508c-1.762 3.06-.449 7.593 1.268 10.076.84 1.214 1.843 2.581 3.158 2.532 1.268-.05 1.746-.82 3.277-.82 1.531 0 1.962.82 3.3.795 1.364-.025 2.229-1.239 3.062-2.457a10.946 10.946 0 0 0 1.385-2.845 4.42 4.42 0 0 1-2.685-4.047Zm-2.517-7.432A4.405 4.405 0 0 0 15.981 2a4.483 4.483 0 0 0-2.945 1.516 4.186 4.186 0 0 0-1.061 3.093 3.71 3.71 0 0 0 2.966-1.416Z" data-name="Brand Logos"/>
  </svg>
);