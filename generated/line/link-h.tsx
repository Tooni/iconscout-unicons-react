import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLinkH = (
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
    <path d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1m2 3H7a3 3 0 0 1 0-6h3a1 1 0 0 0 0-2H7a5 5 0 0 0 0 10h3a1 1 0 0 0 0-2m7-8h-3a1 1 0 0 0 0 2h3a3 3 0 0 1 0 6h-3a1 1 0 0 0 0 2h3a5 5 0 0 0 0-10" />
  </svg>
)
const ForwardRef = forwardRef(SvgLinkH)
export default ForwardRef
