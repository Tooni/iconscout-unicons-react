import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUsdCircle = (
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
    <path d="M11 9h4a1 1 0 0 0 0-2h-2V6a1 1 0 0 0-2 0v1a3 3 0 0 0 0 6h2a1 1 0 0 1 0 2H9a1 1 0 0 0 0 2h2v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 0-6h-2a1 1 0 0 1 0-2m1-8a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgUsdCircle)
export default ForwardRef
