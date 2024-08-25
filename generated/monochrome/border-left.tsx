import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderLeft = (
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
      d="M3.5 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1"
      opacity={1}
    />
    <circle cx={7.5} cy={12} r={1} opacity={0.5} />
    <circle cx={11.5} cy={12} r={1} opacity={0.5} />
    <circle cx={15.5} cy={12} r={1} opacity={0.5} />
    <circle cx={19.5} cy={12} r={1} opacity={0.5} />
    <circle cx={7.5} cy={4} r={1} opacity={0.5} />
    <circle cx={11.5} cy={4} r={1} opacity={0.5} />
    <circle cx={15.5} cy={4} r={1} opacity={0.5} />
    <circle cx={19.5} cy={4} r={1} opacity={0.5} />
    <circle cx={19.5} cy={8} r={1} opacity={0.5} />
    <circle cx={19.5} cy={16} r={1} opacity={0.5} />
    <circle cx={11.5} cy={8} r={1} opacity={0.5} />
    <circle cx={11.5} cy={16} r={1} opacity={0.5} />
    <circle cx={7.5} cy={20} r={1} opacity={0.5} />
    <circle cx={11.5} cy={20} r={1} opacity={0.5} />
    <circle cx={15.5} cy={20} r={1} opacity={0.5} />
    <circle cx={19.5} cy={20} r={1} opacity={0.5} />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderLeft)
export default ForwardRef
