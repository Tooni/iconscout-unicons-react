import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAngleRightB = (
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
    <path d="M15.5 11.3 9.9 5.6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.9 4.9-4.9 4.9c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l5.7-5.7c.3-.2.3-.8-.1-1.2" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleRightB)
export default ForwardRef
