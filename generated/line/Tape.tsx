import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTape = (
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
    <path d="M14.5 7a4 4 0 1 0 4 4 4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2m1-10h-2a7 7 0 0 0-7 7v3h-1a1 1 0 0 0 0 2h1v2h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h12a7 7 0 0 0 7-7v-2a7 7 0 0 0-7-7m5 9a5 5 0 0 1-5 5h-7v-7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgTape)
export default ForwardRef
