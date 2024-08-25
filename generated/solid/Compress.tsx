import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCompress = (
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
    <path d="M8 15H3c-.6 0-1 .4-1 1s.4 1 1 1h4v4c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1M8 2c-.6 0-1 .4-1 1v4H3c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m8 7h5c.6 0 1-.4 1-1s-.4-1-1-1h-4V3c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1m5 6h-5c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCompress)
export default ForwardRef
