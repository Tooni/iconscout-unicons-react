import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPoundCircle = (
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
    <path d="M16 15h-5.18a3 3 0 0 0 .18-1v-1h2.5a1 1 0 0 0 0-2H11v-1a1.95 1.95 0 0 1 3.63-1 1 1 0 0 0 1.74-1A4 4 0 0 0 9 10v1H8a1 1 0 0 0 0 2h1v1a1 1 0 0 1-1 1 1 1 0 0 0 0 2h8a1 1 0 0 0 0-2M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1m0 20a9 9 0 1 1 9-9 9 9 0 0 1-9 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgPoundCircle)
export default ForwardRef
