import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerUpRight = (
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
    <path d="M19.61 7.25a1 1 0 0 0-.22-.33l-4.63-4.63a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l2.92 2.92h-8a4 4 0 0 0-4 4V21a1 1 0 0 0 2 0V10.63a2 2 0 0 1 2-2h8l-2.92 2.92a1 1 0 0 0 .71 1.71 1 1 0 0 0 .7-.3l4.63-4.62a1.2 1.2 0 0 0 .22-.34 1 1 0 0 0 0-.75" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerUpRight)
export default ForwardRef
