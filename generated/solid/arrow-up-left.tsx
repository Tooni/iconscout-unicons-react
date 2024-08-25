import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowUpLeft = (
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
    <path d="M9.4 8H17c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1s1-.4 1-1V9.4l8.3 8.3c.4.4 1 .4 1.4 0s.4-1 0-1.4z" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowUpLeft)
export default ForwardRef
