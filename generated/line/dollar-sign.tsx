import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDollarSign = (
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
    <path d="M14 11h-4a2 2 0 0 1 0-4h5a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2V3a1 1 0 0 0-2 0v2h-1a4 4 0 0 0 0 8h4a2 2 0 0 1 0 4H9a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3h2v2a1 1 0 0 0 2 0v-2h1a4 4 0 0 0 0-8" />
  </svg>
)
const ForwardRef = forwardRef(SvgDollarSign)
export default ForwardRef
