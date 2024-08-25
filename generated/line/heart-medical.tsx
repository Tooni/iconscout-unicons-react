import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHeartMedical = (
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
    <path d="M14 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2m6.16-6A6.29 6.29 0 0 0 12 4.41a6.27 6.27 0 0 0-8.16 9.48l6 6.05a3 3 0 0 0 4.24 0l6-6.05A6.27 6.27 0 0 0 20.16 5m-1.41 7.46-6 6a1 1 0 0 1-1.42 0l-6-6a4.29 4.29 0 0 1 0-6 4.27 4.27 0 0 1 6 0 1 1 0 0 0 1.42 0 4.27 4.27 0 0 1 6 0 4.29 4.29 0 0 1 0 6.02Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHeartMedical)
export default ForwardRef
