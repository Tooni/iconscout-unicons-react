import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgVideoSlash = (
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
    <path d="m7.71 6.29-4-4a1 1 0 0 0-1.42 1.42L4.62 6A3 3 0 0 0 2 9v6a3 3 0 0 0 3 3h9a3 3 0 0 0 1.9-.69l4.39 4.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM14 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.59l7.87 7.88A1 1 0 0 1 14 16m7.53-8.85a1 1 0 0 0-1 0L17 8.89A3 3 0 0 0 14 6h-1.34a1 1 0 0 0 0 2H14a1 1 0 0 1 1 1v1.5a2 2 0 0 0 0 .19.7.7 0 0 0 .05.2s.05.06.07.1a1 1 0 0 0 .15.21s.1.06.15.1l.17.11a.9.9 0 0 0 .23 0 .7.7 0 0 0 .14 0 2 2 0 0 0 .19 0 .7.7 0 0 0 .2-.05L20 9.62v5.72a1 1 0 1 0 2 0V8a1 1 0 0 0-.47-.85" />
  </svg>
)
const ForwardRef = forwardRef(SvgVideoSlash)
export default ForwardRef
