import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHtml5 = (
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
    <path
      d="m3.182 2 1.605 18 7.202 2 7.222-2.002L20.818 2Zm14.143 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.003-4.523-1.255-.309-3.466h2.216l.158 1.76 2.458.664h.002l2.463-.665.256-2.863H7.06L6.464 5.68h11.059Z"
      opacity={1}
    />
    <path
      d="M17.325 7.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.003-4.523-1.255-.309-3.466h2.216l.158 1.76 2.458.664h.002l2.463-.665.256-2.863H7.06L6.464 5.68h11.059Z"
      opacity={0.25}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHtml5)
export default ForwardRef
