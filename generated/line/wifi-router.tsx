import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWifiRouter = (
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
    <path d="M8.9 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-3 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m6 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1M15 8.5a1 1 0 0 1 1.73 0 1 1 0 0 0 1.36.37 1 1 0 0 0 .41-1.37 3 3 0 0 0-5.2 0 1 1 0 0 0 1.7 1m7-3a7 7 0 0 0-12.12 0 1 1 0 0 0 .37 1.37 1 1 0 0 0 .45.13 1 1 0 0 0 .87-.5 5 5 0 0 1 8.66 0 1 1 0 0 0 1.37.37A1 1 0 0 0 22 5.5M17.9 14h-1v-3a1 1 0 1 0-2 0v3h-10a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3m1 5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgWifiRouter)
export default ForwardRef
