import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderClear = (
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
    <path d="M8 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1M4 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m16-6a1 1 0 1 0-1-1 1 1 0 0 0 1 1M4 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1m8-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-8 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m12 12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-8 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m8 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderClear)
export default ForwardRef
