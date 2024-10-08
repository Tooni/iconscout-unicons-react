import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgChartBar = (
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
    <path d="M21 20h-1V5a1 1 0 0 0-2 0v15h-2v-7a1 1 0 0 0-2 0v7h-2V9a1 1 0 0 0-2 0v11H8v-3a1 1 0 0 0-2 0v3H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgChartBar)
export default ForwardRef
