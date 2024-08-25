import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgYen = (
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
    <path d="M18.55 2.17a1 1 0 0 0-1.38.28L12 10.2 6.83 2.45a1 1 0 0 0-1.66 1.1l5 7.45H7a1 1 0 0 0 0 2h4v2H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4v-2h4a1 1 0 0 0 0-2h-3.13l5-7.45a1 1 0 0 0-.32-1.38" />
  </svg>
)
const ForwardRef = forwardRef(SvgYen)
export default ForwardRef
