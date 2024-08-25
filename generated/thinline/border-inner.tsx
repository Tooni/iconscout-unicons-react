import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderInner = (
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
    <path d="M8 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 8 3.5m13 8h-8.5V3a.5.5 0 0 0-1 0v8.5H3a.5.5 0 0 0 0 1h8.5V21a.5.5 0 1 0 1 0v-8.5H21a.5.5 0 0 0 0-1m-1-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 20 3.5m0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-4-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 16 3.5m-12 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m12 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-8-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m12-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M4 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 4 7.5m16 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-2a.501.501 0 1 1-.002 1.002A.501.501 0 0 1 4 3.5m0 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderInner)
export default ForwardRef
