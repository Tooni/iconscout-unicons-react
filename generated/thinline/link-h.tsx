import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLinkH = (
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
    <path d="M10.5 16H7a4 4 0 1 1 0-8h3.5a.5.5 0 0 0 0-1H7a5 5 0 0 0 0 10h3.5a.5.5 0 0 0 0-1M8 12a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5m9-5h-3.5a.5.5 0 0 0 0 1H17a4 4 0 1 1 0 8h-3.5a.5.5 0 0 0 0 1H17a5 5 0 0 0 0-10" />
  </svg>
)
const ForwardRef = forwardRef(SvgLinkH)
export default ForwardRef
