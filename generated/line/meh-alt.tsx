import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMehAlt = (
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
    <path d="M9 11h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m6 3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m0-5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgMehAlt)
export default ForwardRef