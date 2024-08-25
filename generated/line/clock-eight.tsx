import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgClockEight = (
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
    <path d="M12 6a1 1 0 0 0-1 1v4.384l-2.43 1.223a1 1 0 1 0 .898 1.786l2.981-1.5A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1m0-4a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgClockEight)
export default ForwardRef
