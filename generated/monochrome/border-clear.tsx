import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderClear = (
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
    <circle cx={12} cy={16} r={1} opacity={0.5} />
    <circle cx={12} cy={20} r={1} opacity={0.5} />
    <circle cx={12} cy={8} r={1} opacity={0.5} />
    <circle cx={12} cy={4} r={1} opacity={0.5} />
    <circle cx={4} cy={16} r={1} opacity={0.5} />
    <circle cx={4} cy={20} r={1} opacity={0.5} />
    <circle cx={4} cy={8} r={1} opacity={0.5} />
    <circle cx={4} cy={4} r={1} opacity={0.5} />
    <circle cx={8} cy={4} r={1} opacity={0.5} />
    <circle cx={16} cy={4} r={1} opacity={0.5} />
    <circle cx={8} cy={20} r={1} opacity={0.5} />
    <circle cx={16} cy={20} r={1} opacity={0.5} />
    <circle cx={8} cy={12} r={1} opacity={0.5} />
    <circle cx={16} cy={12} r={1} opacity={0.5} />
    <circle cx={20} cy={16} r={1} opacity={0.5} />
    <circle cx={20} cy={20} r={1} opacity={0.5} />
    <circle cx={20} cy={8} r={1} opacity={0.5} />
    <circle cx={12} cy={12} r={1} opacity={0.5} />
    <circle cx={4} cy={12} r={1} opacity={0.5} />
    <circle cx={20} cy={12} r={1} opacity={0.5} />
    <circle cx={20} cy={4} r={1} opacity={0.5} />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderClear)
export default ForwardRef
