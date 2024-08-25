import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTh = (
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
    <path d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5m-10 19H3v-8.5h8.5zm0-9.5H3V3h8.5zM21 21h-8.5v-8.5H21zm0-9.5h-8.5V3H21z" />
  </svg>
)
const ForwardRef = forwardRef(SvgTh)
export default ForwardRef
