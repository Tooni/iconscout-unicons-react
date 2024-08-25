import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderOut = (
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
    <path d="M12 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m8-14H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 16H5V5h14ZM8 13a1 1 0 1 0-1-1 1 1 0 0 0 1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderOut)
export default ForwardRef
