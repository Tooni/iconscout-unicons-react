import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerUpLeft = (
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
    <path d="M14.7 6.6h-7l2.9-2.9c.4-.4.4-1 0-1.4s-1-.4-1.4 0L4.6 6.9c-.4.4-.4 1 0 1.4L9.2 13c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-2.9-3h7c1.7 0 3 1.3 3 3V21c0 .6.4 1 1 1s1-.4 1-1v-9.4c0-2.7-2.3-5-5-5" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerUpLeft)
export default ForwardRef
