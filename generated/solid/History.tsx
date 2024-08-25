import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHistory = (
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
    <path d="M17 3.3C13.1 1.1 8.3 1.8 5.1 4.8V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2C7.7 4.9 9.8 4 12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8c0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10 3.6 0 6.9-1.9 8.7-5 2.7-4.8 1.1-10.9-3.7-13.7M12 8c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-1V9c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgHistory)
export default ForwardRef
