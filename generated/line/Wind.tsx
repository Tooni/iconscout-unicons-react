import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWind = (
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
    <path d="M3.5 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1m4 0h7a3 3 0 0 0 0-6 3.06 3.06 0 0 0-1.5.4 1 1 0 0 0-.37 1.37 1 1 0 0 0 1.37.36 1.1 1.1 0 0 1 .5-.13 1 1 0 0 1 0 2h-7a1 1 0 0 0 0 2m-4 4h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2m17-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-2 2h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6m-6 4h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 0 2 1.1 1.1 0 0 1-.5-.13 1 1 0 1 0-1 1.73 3.06 3.06 0 0 0 1.5.4 3 3 0 0 0 0-6m-8 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgWind)
export default ForwardRef
