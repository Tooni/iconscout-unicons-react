import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRssInterface = (
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
    <path d="M3 14a1 1 0 0 0 0 2 3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5m-.71 4.29a1 1 0 1 0 1.42 0 1 1 0 0 0-1.42 0M19 4H5a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 0 0 2h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M3 10a1 1 0 0 0 0 2 7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9" />
  </svg>
)
const ForwardRef = forwardRef(SvgRssInterface)
export default ForwardRef
