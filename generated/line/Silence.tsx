import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSilence = (
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
    <path d="M9 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1m6 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m1 3a1 1 0 0 0-2 0h-1a1 1 0 0 0-2 0h-1a1 1 0 0 0-2 0 1 1 0 0 0 0 2 1 1 0 0 0 2 0h1a1 1 0 0 0 2 0h1a1 1 0 0 0 2 0 1 1 0 0 0 0-2M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgSilence)
export default ForwardRef
