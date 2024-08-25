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
    <path d="M12.5 16.5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m0-4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-5 4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m0-4h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m14-6h-3v-4a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v4h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1m-1 14h-17v-12h3a1 1 0 0 0 1-1v-4h9v4a1 1 0 0 0 1 1h3Zm-4-8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-3-5.5H13v-.5a1 1 0 0 0-2 0V7h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V9h.5a1 1 0 0 0 0-2m4 9.5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgHospital)
export default ForwardRef
