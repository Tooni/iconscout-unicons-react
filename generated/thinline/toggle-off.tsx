import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgToggleOff = (
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
    <path d="M7.5 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9-7h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11m0 10h-9a4.5 4.5 0 1 1 0-9h9a4.5 4.5 0 1 1 0 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgToggleOff)
export default ForwardRef
