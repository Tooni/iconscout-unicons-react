import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerDownLeft = (
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
    <path d="M18.7 2c-.6 0-1 .4-1 1v10.4c0 1.1-.9 2-2 2h-8l2.9-2.9c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-4.6 4.6c-.4.4-.4 1 0 1.4l4.6 4.6c.2.2.5.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-2.9-2.9h8c2.2 0 4-1.8 4-4V3c0-.6-.5-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerDownLeft)
export default ForwardRef
