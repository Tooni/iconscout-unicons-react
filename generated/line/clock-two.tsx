import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgClockTwo = (
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
    <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8m2.098-10.366L13 10.268V7a1 1 0 0 0-2 0v5a1 1 0 0 0 1.5.866l2.598-1.5a1 1 0 1 0-1-1.732" />
  </svg>
)
const ForwardRef = forwardRef(SvgClockTwo)
export default ForwardRef
