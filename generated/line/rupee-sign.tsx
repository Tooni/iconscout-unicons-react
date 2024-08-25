import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRupeeSign = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M18 7h-2.21a5.5 5.5 0 0 0-1-2H18a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2h3.5a3.5 3.5 0 0 1 3.15 2H7a1 1 0 0 0 0 2h7a3.5 3.5 0 0 1-3.45 3H7a.7.7 0 0 0-.14 0 .7.7 0 0 0-.2 0 .7.7 0 0 0-.19.1l-.12.07a.8.8 0 0 0-.14.17 1 1 0 0 0-.09.14.6.6 0 0 0 0 .18A.65.65 0 0 0 6 13a.7.7 0 0 0 0 .14.7.7 0 0 0 0 .2.7.7 0 0 0 .1.19s0 .08.07.12l6 7a1 1 0 0 0 1.52-1.3L9.18 14h1.32A5.5 5.5 0 0 0 16 9h2a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgRupeeSign)
export default ForwardRef
