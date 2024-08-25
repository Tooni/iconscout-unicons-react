import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBloggerAlt = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path
      d="M20 23H4a3.003 3.003 0 0 1-3-3V4a3.003 3.003 0 0 1 3-3h16a3.003 3.003 0 0 1 3 3v16a3.003 3.003 0 0 1-3 3"
      opacity={0.5}
    />
    <path
      d="M16.003 10.002H16V9a4.004 4.004 0 0 0-4-4h-2a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h4a5.006 5.006 0 0 0 5-5v-1a3 3 0 0 0-2.997-2.998M10 9h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2m4 6h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBloggerAlt)
export default ForwardRef
