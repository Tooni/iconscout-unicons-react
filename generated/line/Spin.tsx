import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSpin = (
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
    <path d="M13 3a7 7 0 0 0 0 14 5 5 0 0 0 0-10 3 3 0 0 0 0 6 1 1 0 0 0 0-2 1 1 0 0 1 0-2 3 3 0 0 1 0 6 5 5 0 0 1 0-10 7 7 0 0 1 0 14 9 9 0 0 1-9-9 1 1 0 0 0-2 0 11 11 0 0 0 11 11 9 9 0 0 0 0-18" />
  </svg>
)
const ForwardRef = forwardRef(SvgSpin)
export default ForwardRef
