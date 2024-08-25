import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgStepForward = (
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
    <path d="M8.7 7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.3 3.3-3.3 3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4c.4-.4.4-1 0-1.4zM16 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgStepForward)
export default ForwardRef
