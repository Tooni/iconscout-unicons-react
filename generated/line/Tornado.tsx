import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgTornado = (
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
    <path d="M10 21H8a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m1-4H6a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m7-15a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1m3 3H6a1 1 0 0 0 0 2h15a1 1 0 0 0 0-2m-2 4h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2m-5 4H8a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgTornado)
export default ForwardRef
