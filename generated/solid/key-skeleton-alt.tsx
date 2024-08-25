import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgKeySkeletonAlt = (
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
    <path d="m20.3 5.1 1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9.8 12.8C9 12.3 8 12 7 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5c0-1-.3-2-.8-2.8l4.9-4.9 1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4l-1.4-1.4 1.4-1.4 1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4zM7 20c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3" />
  </svg>
)
const ForwardRef = forwardRef(SvgKeySkeletonAlt)
export default ForwardRef
