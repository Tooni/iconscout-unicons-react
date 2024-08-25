import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAnnoyed = (
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
    <path d="M9 9a1 1 0 1 0 1 1 1 1 0 0 0-1-1m6 4a5 5 0 0 0-4.37 2.57 1 1 0 0 0 .37 1.36 1 1 0 0 0 .49.13 1 1 0 0 0 .87-.51A3 3 0 0 1 15 15a1 1 0 0 0 0-2m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgAnnoyed)
export default ForwardRef
