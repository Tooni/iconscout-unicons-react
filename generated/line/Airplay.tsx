import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAirplay = (
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
    <path d="M12.83 13.45a1 1 0 0 0-1.66 0l-4 6a1 1 0 0 0 0 1A1 1 0 0 0 8 21h8a1 1 0 0 0 .88-.53 1 1 0 0 0-.05-1ZM9.87 19 12 15.8l2.13 3.2ZM19 3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.85a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-.85a1 1 0 0 0 0 2H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3" />
  </svg>
)
const ForwardRef = forwardRef(SvgAirplay)
export default ForwardRef
