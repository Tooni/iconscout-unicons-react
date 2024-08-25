import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMouseAlt2 = (
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
    <path d="M12 2a7 7 0 0 0-7 7v6a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7m5 13a5 5 0 0 1-10 0V9a5 5 0 0 1 4-4.9V12a1 1 0 0 0 2 0V4.1A5 5 0 0 1 17 9Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMouseAlt2)
export default ForwardRef
