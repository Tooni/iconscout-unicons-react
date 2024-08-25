import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgChartGrowthAlt = (
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
    <path d="M21 20H4v-2h3a1 1 0 0 0 0-2H4v-2h7a1 1 0 0 0 0-2H4v-2h11a1 1 0 0 0 0-2H4V6h15a1 1 0 0 0 0-2H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgChartGrowthAlt)
export default ForwardRef
