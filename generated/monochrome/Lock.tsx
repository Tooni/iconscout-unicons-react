import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLock = (
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
      d="M16 11H8a1 1 0 0 1-1-1V7a5 5 0 0 1 10 0v3a1 1 0 0 1-1 1M9 9h6V7a3 3 0 0 0-6 0Z"
      opacity={0.5}
    />
    <rect width={16} height={13} x={4} y={9} opacity={1} rx={3} />
  </svg>
)
const ForwardRef = forwardRef(SvgLock)
export default ForwardRef
