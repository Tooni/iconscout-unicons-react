import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUtensils = (
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
    <path d="M19 2a1 1 0 0 0-1 1v5.46l-1 .67V3a1 1 0 0 0-2 0v6.13l-1-.67V3a1 1 0 0 0-2 0v6a1 1 0 0 0 .45.83L15 11.54V21a1 1 0 0 0 2 0v-9.46l2.55-1.71A1 1 0 0 0 20 9V3a1 1 0 0 0-1-1M9 2a5 5 0 0 0-5 5v6a1 1 0 0 0 1 1h3v7a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1M8 12H6V7a3 3 0 0 1 2-2.83Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgUtensils)
export default ForwardRef
