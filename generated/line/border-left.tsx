import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderLeft = (
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
    <path d="M11.5 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-8-8a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1m16 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-8 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-16a1 1 0 1 0 1 1 1 1 0 0 0-1-1m12 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-8-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m8 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderLeft)
export default ForwardRef
