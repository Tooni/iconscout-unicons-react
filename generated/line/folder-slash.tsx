import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFolderSlash = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="m21.71 20.29-1.6-1.6-16.4-16.4a1 1 0 0 0-1.42 1.42l1.4 1.39A3 3 0 0 0 3 7v11a3 3 0 0 0 3 3h12a3 3 0 0 0 1.29-.3l1 1a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41M6 19a1 1 0 0 1-1-1V7a1 1 0 0 1 .12-.46L17.59 19Zm4.62-13a1 1 0 0 1 .89.67l.54 1.64A1 1 0 0 0 13 9h5a1 1 0 0 1 1 1v4.34a1 1 0 1 0 2 0V10a3 3 0 0 0-3-3h-4.28l-.32-1a3 3 0 0 0-2.68-2 1 1 0 0 0-.1 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgFolderSlash)
export default ForwardRef
