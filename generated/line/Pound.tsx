import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPound = (
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
    <path d="M20 20H8a4.92 4.92 0 0 0 1-3v-3h6a1 1 0 0 0 0-2H9V8.89a4.89 4.89 0 0 1 9.13-2.44 1 1 0 0 0 1.37.36 1 1 0 0 0 .37-1.36A6.9 6.9 0 0 0 7 8.89V12H4a1 1 0 0 0 0 2h3v3a3 3 0 0 1-3 3 1 1 0 0 0 0 2h16a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgPound)
export default ForwardRef
