import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBasketballHoop = (
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
    <path d="M18 10H6a1 1 0 0 0 0 2h1v9a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-9h1a1 1 0 0 0 0-2m-7 8H9v-2h2Zm0-4H9v-2h2Zm4 4h-2v-2h2Zm0-4h-2v-2h2Zm5-12H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3 1 1 0 0 0 0-2 1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1 1 1 0 0 0 0 2 3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-6 6a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBasketballHoop)
export default ForwardRef
