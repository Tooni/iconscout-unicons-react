import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLocationPoint = (
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
    <path d="M18 4.48a8.45 8.45 0 0 0-12 12l5.27 5.28a1 1 0 0 0 1.42 0L18 16.43a8.45 8.45 0 0 0 0-11.95M16.57 15 12 19.59 7.43 15a6.46 6.46 0 1 1 9.14 0M9 7.41a4.32 4.32 0 0 0 0 6.1 4.31 4.31 0 0 0 7.36-3 4.24 4.24 0 0 0-1.26-3.05A4.3 4.3 0 0 0 9 7.41m4.69 4.68a2.33 2.33 0 1 1 .67-1.63 2.33 2.33 0 0 1-.72 1.63Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLocationPoint)
export default ForwardRef