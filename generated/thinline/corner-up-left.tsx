import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerUpLeft = (
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
    <path d="M15.111 7.5H5.71l4.646-4.646a.5.5 0 0 0-.707-.707l-5.5 5.5a.5.5 0 0 0 0 .707l5.5 5.5a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.708L5.71 8.5h9.402a3.393 3.393 0 0 1 3.389 3.389V21.5a.5.5 0 1 0 1 0v-9.612A4.394 4.394 0 0 0 15.111 7.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerUpLeft)
export default ForwardRef
