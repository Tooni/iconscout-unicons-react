import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowDownLeft = (
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
    <path d="M17 16H9.4l8.3-8.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 14.6V7c0-.6-.4-1-1-1s-1 .4-1 1v10c0 .1 0 .3.1.4.1.2.3.4.5.5.1.1.3.1.4.1h10c.6 0 1-.4 1-1s-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDownLeft)
export default ForwardRef
