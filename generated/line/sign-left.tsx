import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSignLeft = (
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
    <path d="M16 5h-3V3a1 1 0 0 0-2 0v2H6a1 1 0 0 0-.78.38l-2 2.5a1 1 0 0 0 0 1.24l2 2.5A1 1 0 0 0 6 12h5v8H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-8h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-1 5H6.48l-1.2-1.5L6.48 7H15Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSignLeft)
export default ForwardRef
