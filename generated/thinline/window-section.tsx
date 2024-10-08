import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWindowSection = (
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
    <path d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5m-13 19H3V9.5h5.5zm6 0h-5V9.5h5zm6.5 0h-5.5V9.5H21zm0-12.5H3V3h18z" />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowSection)
export default ForwardRef
