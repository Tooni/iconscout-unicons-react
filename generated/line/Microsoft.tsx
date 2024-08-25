import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMicrosoft = (
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
    <path d="M2 22h9.5v-9.5H2zm0-10.5h9.5V2H2zM12.5 2v9.5H22V2zm0 20H22v-9.5h-9.5z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMicrosoft)
export default ForwardRef
