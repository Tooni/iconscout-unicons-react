import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFocus = (
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
    <path d="M8 2H3a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V4h4a1 1 0 0 0 0-2m0 18H4v-4a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2M21 2h-5a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m0 13a1 1 0 0 0-1 1v4h-4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgFocus)
export default ForwardRef
