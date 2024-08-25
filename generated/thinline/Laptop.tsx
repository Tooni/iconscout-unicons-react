import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLaptop = (
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
    <path d="M21.5 15H20V7a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v8H2.5a.5.5 0 0 0-.5.5V17a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-1.5a.5.5 0 0 0-.5-.5M5 7a2.003 2.003 0 0 1 2-2h10a2.003 2.003 0 0 1 2 2v8H5zm16 10a2.003 2.003 0 0 1-2 2H5a2.003 2.003 0 0 1-2-2v-1h18z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLaptop)
export default ForwardRef
