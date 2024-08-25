import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHistoryAlt = (
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
    <path d="M16.4 3.3C12.5 1.1 7.7 1.8 4.6 4.8V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H5.7C7.1 4.9 9.2 4 11.5 4c4.4 0 8 3.6 8 8s-3.6 8-8 8c-.6 0-1 .4-1 1s.4 1 1 1c3.6 0 6.9-1.9 8.7-5 2.7-4.8 1-10.9-3.8-13.7m-5 4.7c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-1V9c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgHistoryAlt)
export default ForwardRef
