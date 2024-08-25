import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRepeat = (
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
    <path d="M21.5 5h-4a.5.5 0 0 0 0 1H21v12H10.707l1.646-1.646a.5.5 0 0 0-.707-.707l-2.5 2.5a.5.5 0 0 0 0 .707l2.5 2.5a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.708L10.708 19h10.794a.5.5 0 0 0 .499-.5v-13a.5.5 0 0 0-.5-.5m-16 13H3V6h10.293l-1.647 1.646a.5.5 0 1 0 .707.708l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5a.5.5 0 0 0-.707.707L13.293 5H2.499A.5.5 0 0 0 2 5.5v13a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgRepeat)
export default ForwardRef
