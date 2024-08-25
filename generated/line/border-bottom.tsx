import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderBottom = (
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
    <path d="M12 13.5a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0-8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m12-8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4 8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-4-8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4 10a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 8H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2m0-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-16 6a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0 8a1 1 0 1 0-1-1 1 1 0 0 0 1 1m0-12a1 1 0 1 0-1-1 1 1 0 0 0 1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderBottom)
export default ForwardRef
