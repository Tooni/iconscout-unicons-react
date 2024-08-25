import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerDownLeft = (
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
    <path d="M18.5 3a.5.5 0 0 0-.5.5v10a2.5 2.5 0 0 1-2.5 2.5H6.707l3.646-3.646a.5.5 0 0 0-.707-.707l-4.5 4.5a.5.5 0 0 0-.145.35L5 16.5a.5.5 0 0 0 .146.354l4.5 4.5a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.708L6.708 17H15.5a3.504 3.504 0 0 0 3.5-3.5v-10a.5.5 0 0 0-.5-.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerDownLeft)
export default ForwardRef
