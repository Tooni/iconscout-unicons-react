import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRssAlt = (
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
    <path d="M2.88 16.88a3 3 0 1 0 4.24 4.24 3 3 0 0 0 0-4.24 3.08 3.08 0 0 0-4.24 0m2.83 2.83a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42 1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.42M5 12a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7m0-4a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0A11 11 0 0 0 5 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgRssAlt)
export default ForwardRef
