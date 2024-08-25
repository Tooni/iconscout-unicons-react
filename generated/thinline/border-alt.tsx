import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderAlt = (
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
    <path d="M7.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-4-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M21 3.5a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5v17a.5.5 0 1 0 1 0V4h16.5a.5.5 0 0 0 .5-.5M11.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m8 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-8 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m8-10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-8-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderAlt)
export default ForwardRef
