import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTable = (
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
      d="M21 22H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M4 20h16V4H4Z"
      opacity={1}
    />
    <path
      d="M9 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1"
      opacity={1}
    />
    <path
      d="M21 10H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 6H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTable)
export default ForwardRef
