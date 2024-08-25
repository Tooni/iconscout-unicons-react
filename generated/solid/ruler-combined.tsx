import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRulerCombined = (
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
    <path d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-3H7c-.6 0-1-.4-1-1s.4-1 1-1h3v-2H7c-.6 0-1-.4-1-1s.4-1 1-1h3v-2H7c-.6 0-1-.4-1-1s.4-1 1-1h1V7c0-.6.4-1 1-1s1 .4 1 1v3h2V7c0-.6.4-1 1-1s1 .4 1 1v3h2V7c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgRulerCombined)
export default ForwardRef
