import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBowlingBall = (
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
    <path d="M7.992 8.002a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4-6a10 10 0 1 0 10 10 10.01 10.01 0 0 0-10-10m0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8m-1-10a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBowlingBall)
export default ForwardRef
