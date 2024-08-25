import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDrill = (
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
    <path d="M19 4H9a1 1 0 0 0-1 1v2H3a1 1 0 0 0 0 2h5v4a1 1 0 0 0 2 0v-1h4v7a1 1 0 0 0 1 1h2a3 3 0 0 0 3-3v-5.18A3 3 0 0 0 22 9V7a3 3 0 0 0-3-3m-1 13a1 1 0 0 1-1 1h-1v-6h2Zm2-8a1 1 0 0 1-1 1h-9V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDrill)
export default ForwardRef
