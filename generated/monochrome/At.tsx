import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAt = (
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
    <path
      d="M12 16.5a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1-4.5 4.5m0-7a2.5 2.5 0 1 0 2.5 2.5A2.503 2.503 0 0 0 12 9.5"
      opacity={1}
    />
    <path
      d="M12 22a10 10 0 1 1 10-10v.75a3.75 3.75 0 0 1-7.5 0V8.5a1 1 0 0 1 2 0v4.25a1.75 1.75 0 0 0 3.5 0V12a8 8 0 1 0-4 6.928 1 1 0 1 1 1 1.733A10 10 0 0 1 12 22"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAt)
export default ForwardRef
