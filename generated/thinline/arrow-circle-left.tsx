import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowCircleLeft = (
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
    <path d="M16.5 11.5H8.707l3.646-3.646a.5.5 0 0 0-.707-.707l-4.5 4.5a.5.5 0 0 0-.145.35L7 12a.5.5 0 0 0 .146.354l4.5 4.5a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.708L8.708 12.5H16.5a.5.5 0 0 0 0-1M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10 0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18 9.01 9.01 0 0 1 9 9 9 9 0 0 1-9 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowCircleLeft)
export default ForwardRef
