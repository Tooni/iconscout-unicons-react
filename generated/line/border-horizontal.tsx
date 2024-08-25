import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderHorizontal = (
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
    <path d="M8 5a1 1 0 1 0-1-1 1 1 0 0 0 1 1M4 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1m8 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1M4 5a1 1 0 1 0-1-1 1 1 0 0 0 1 1m12 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m8 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1M4 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1m16 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2m-4 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1M4 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1m16-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1M8 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderHorizontal)
export default ForwardRef
