import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderInner = (
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
    <path d="M21 12c0-.6-.4-1-1-1h-7V4c0-.6-.4-1-1-1s-1 .4-1 1v7H4c-.6 0-1 .4-1 1s.4 1 1 1h7v7c0 .6.4 1 1 1s1-.4 1-1v-7h7c.5 0 1-.4 1-1M4 15c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1M4 9c.6 0 1-.4 1-1s-.5-1-1-1-1 .4-1 1 .4 1 1 1m0-4c.6 0 1-.4 1-1s-.5-1-1-1-1 .4-1 1 .4 1 1 1m4 0c.6 0 1-.4 1-1s-.5-1-1-1-1 .4-1 1 .4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1M8 19c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1m4-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.5-1-1-1m0-10c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1m0-4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderInner)
export default ForwardRef
