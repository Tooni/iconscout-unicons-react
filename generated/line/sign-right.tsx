import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSignRight = (
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
    <path d="M7 6v5a1 1 0 0 0 1 1h3v8H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-8h5a1 1 0 0 0 .78-.37l2-2.5a1 1 0 0 0 0-1.25l-2-2.5A1 1 0 0 0 18 5h-5V3a1 1 0 0 0-2 0v2H8a1 1 0 0 0-1 1m2 1h8.52l1.2 1.5-1.2 1.5H9Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSignRight)
export default ForwardRef
