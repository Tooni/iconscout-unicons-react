import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowDownRight = (
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
    <path d="M17 6c-.6 0-1 .4-1 1v7.6L7.7 6.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l8.3 8.3H7c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDownRight)
export default ForwardRef
