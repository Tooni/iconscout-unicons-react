import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHospital = (
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
    <path
      d="M12.5 14.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m-5-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m10-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2"
      opacity={0.5}
    />
    <path
      d="M13.5 7H13v-.5a1 1 0 0 0-2 0V7h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V9h.5a1 1 0 0 0 0-2"
      opacity={1}
    />
    <path
      d="M21.5 6.5h-3v-4a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v4h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1m-14 12h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m5 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m1-5.5H13v.5a1 1 0 0 1-2 0V9h-.5a1 1 0 0 1 0-2h.5v-.5a1 1 0 0 1 2 0V7h.5a1 1 0 0 1 0 2m4 9.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2"
      opacity={0.25}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHospital)
export default ForwardRef
