import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTrafficBarrier = (
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
    <path d="M21 5h-1V4a1 1 0 0 0-2 0v1H6V4a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v7a1 1 0 0 0 2 0v-7h12v7a1 1 0 0 0 2 0v-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M4 9.52V7h2.52ZM5.34 11l4-4h3.33l-4 4Zm6.15 0 4-4h3.18l-4 4ZM20 11h-2.51L20 8.49Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgTrafficBarrier)
export default ForwardRef
