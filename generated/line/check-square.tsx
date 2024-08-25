import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCheckSquare = (
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
    <path d="M10.21 14.75a1 1 0 0 0 1.42 0l4.08-4.08a1 1 0 0 0-1.42-1.42l-3.37 3.38-1.21-1.22a1 1 0 0 0-1.42 1.42ZM21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 18H4V4h16Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckSquare)
export default ForwardRef
