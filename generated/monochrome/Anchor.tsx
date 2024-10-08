import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAnchor = (
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
      d="M12 22a8.01 8.01 0 0 1-8-8 1 1 0 0 1 2 0 6 6 0 0 0 12 0 1 1 0 0 1 2 0 8.01 8.01 0 0 1-8 8"
      opacity={1}
    />
    <path
      d="M12 22a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v14a1 1 0 0 1-1 1m-5-7H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m12 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2"
      opacity={1}
    />
    <path
      d="M14 11h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m-2-3a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAnchor)
export default ForwardRef
