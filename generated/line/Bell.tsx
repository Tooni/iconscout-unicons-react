import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBell = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="M18 13.18V10a6 6 0 0 0-5-5.91V3a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 10v3.18A3 3 0 0 0 4 16v2a1 1 0 0 0 1 1h3.14a4 4 0 0 0 7.72 0H19a1 1 0 0 0 1-1v-2a3 3 0 0 0-2-2.82M8 10a4 4 0 0 1 8 0v3H8Zm4 10a2 2 0 0 1-1.72-1h3.44A2 2 0 0 1 12 20m6-3H6v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBell)
export default ForwardRef
