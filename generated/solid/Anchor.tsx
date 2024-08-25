import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAnchor = (
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
    <path d="M19 13h-2c-.6 0-1 .4-1 1s.4 1 1 1h.9c-.4 2.5-2.4 4.5-4.9 4.9V11h1c.6 0 1-.4 1-1s-.4-1-1-1h-1V7.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3S9 3.3 9 5c0 1.3.8 2.4 2 2.8V9h-1c-.6 0-1 .4-1 1s.4 1 1 1h1v8.9c-2.5-.4-4.5-2.4-4.9-4.9H7c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1 0 4.4 3.6 8 8 8s8-3.6 8-8c0-.6-.4-1-1-1m-7-9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgAnchor)
export default ForwardRef
