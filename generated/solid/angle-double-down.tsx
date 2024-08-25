import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAngleDoubleDown = (
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
    <path d="M11.3 11.5c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 9.3 9.7 7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4zm3 1L12 14.8l-2.3-2.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4-.4-.3-1-.3-1.4 0" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleDown)
export default ForwardRef
