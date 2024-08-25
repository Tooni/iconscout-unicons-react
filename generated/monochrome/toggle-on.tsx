import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgToggleOn = (
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
    <circle cx={16.5} cy={12} r={2.5} opacity={0.5} />
    <path
      d="M16.5 6.5h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11m0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgToggleOn)
export default ForwardRef
