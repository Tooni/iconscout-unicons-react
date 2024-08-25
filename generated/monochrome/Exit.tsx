import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgExit = (
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
      d="m15.707 11.293-4-4a1 1 0 0 0-1.414 1.414L12.586 11H4v2h8.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414"
      opacity={1}
    />
    <path
      d="M17 2H7a3.003 3.003 0 0 0-3 3v6h8.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 13H4v6a3.003 3.003 0 0 0 3 3h10a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExit)
export default ForwardRef
