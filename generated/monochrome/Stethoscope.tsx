import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgStethoscope = (
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
    <path
      d="M19 14a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3M8 15a6.007 6.007 0 0 1-6-6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v5a4 4 0 0 0 8 0V4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v6a6.007 6.007 0 0 1-6 6"
      opacity={0.5}
    />
    <path
      d="M19 14a3 3 0 0 1-1-.184V15.5a4.5 4.5 0 0 1-9 0v-.59a5.6 5.6 0 0 1-2 0v.59a6.5 6.5 0 0 0 13 0v-1.684A3 3 0 0 1 19 14"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStethoscope)
export default ForwardRef
