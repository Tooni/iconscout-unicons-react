import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerDownRight = (
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
    <path d="M18.961 16.309a.5.5 0 0 0-.108-.163l-4.5-4.5a.5.5 0 0 0-.707.708L17.293 16H8.5A2.5 2.5 0 0 1 6 13.5v-10a.5.5 0 0 0-1 0v10A3.504 3.504 0 0 0 8.5 17h8.793l-3.647 3.646a.5.5 0 1 0 .708.708l4.5-4.5a.5.5 0 0 0 .146-.352V16.5a.5.5 0 0 0-.039-.191" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerDownRight)
export default ForwardRef
