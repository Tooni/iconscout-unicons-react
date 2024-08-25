import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerLeftDown = (
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
    <path d="M21 4.3h-9.4c-2.8 0-5 2.2-5 5v7l-2.9-2.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.2.2.4.3.7.3s.5-.1.7-.3l4.6-4.6c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2.9 2.9v-7c0-1.7 1.3-3 3-3H21c.6 0 1-.4 1-1s-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerLeftDown)
export default ForwardRef
