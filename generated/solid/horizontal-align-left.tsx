import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHorizontalAlignLeft = (
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
    <path d="M21 10h-5V7c0-.6-.4-1-1-1H4V3c0-.6-.4-1-1-1-.5 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1v-3h17c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m-7 0H4V8h10z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHorizontalAlignLeft)
export default ForwardRef
