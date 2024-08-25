import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAngleDown = (
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
    <path d="M16.9 9.2c-.4-.4-1-.4-1.4 0L12 12.7 8.5 9.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.2 4.2c.2.2.4.3.7.3s.5-.1.7-.3l4.2-4.2c.4-.4.4-1 0-1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDown)
export default ForwardRef
