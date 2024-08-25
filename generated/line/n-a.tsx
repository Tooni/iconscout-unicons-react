import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgNA = (
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
    <path d="M19 6h-1a3 3 0 0 0-3 3v8a1 1 0 0 0 2 0v-4h3v4a1 1 0 0 0 2 0V9a3 3 0 0 0-3-3m1 5h-3V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1ZM8 6a1 1 0 0 0-1 1v5.76L3.89 6.55A1 1 0 0 0 2 7v10a1 1 0 0 0 2 0v-5.76l3.11 6.21A1 1 0 0 0 8 18a1 1 0 0 0 .23 0A1 1 0 0 0 9 17V7a1 1 0 0 0-1-1m4-2a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgNA)
export default ForwardRef
