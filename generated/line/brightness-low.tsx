import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBrightnessLow = (
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
    <path d="M3 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1m1.93 6.66a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0M6.34 6.34a1 1 0 1 0-1.41 0 1 1 0 0 0 1.41 0M12 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m5.66 13.66a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0M21 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-3.34-6.07a1 1 0 1 0 1.41 0 1 1 0 0 0-1.41 0M12 20a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-14a6 6 0 1 0 6 6 6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
  </svg>
)
const ForwardRef = forwardRef(SvgBrightnessLow)
export default ForwardRef
