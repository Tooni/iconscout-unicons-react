import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgExclamationCircle = (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 15c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m1-5c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1z" />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamationCircle)
export default ForwardRef
