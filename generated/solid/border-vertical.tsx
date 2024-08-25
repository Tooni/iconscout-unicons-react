import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderVertical = (
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
    <path d="M11 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1s1-.4 1-1V4c0-.6-.4-1-1-1m-4 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m12 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1M7 3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1M3 3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m12 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m4 2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1M3 7c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m0 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m4 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m12 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderVertical)
export default ForwardRef