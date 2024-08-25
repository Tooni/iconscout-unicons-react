import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAlignAlt = (
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
    <path d="M10.5 12h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m0 4h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m3-11h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1m-3 15h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m0-12h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m7 12h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m4-8h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m-11-8h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m11 4h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1m0 8h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignAlt)
export default ForwardRef
