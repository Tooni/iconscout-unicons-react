import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderOut = (
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
    <path
      d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M5 19h14V5H5Z"
      opacity={1}
    />
    <circle cx={12} cy={12} r={1} opacity={0.5} />
    <circle cx={12} cy={16} r={1} opacity={0.5} />
    <circle cx={12} cy={8} r={1} opacity={0.5} />
    <circle cx={8} cy={12} r={1} opacity={0.5} />
    <circle cx={16} cy={12} r={1} opacity={0.5} />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderOut)
export default ForwardRef
