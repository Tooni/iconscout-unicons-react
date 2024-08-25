import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMonitor = (
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
    <path d="M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2.64l-.58 1a2 2 0 0 0 0 2 2 2 0 0 0 1.75 1h6.46A2 2 0 0 0 17 21a2 2 0 0 0 0-2l-.59-1H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M8.77 20 10 18h4l1.2 2ZM20 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16Zm0-3H4V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMonitor)
export default ForwardRef
