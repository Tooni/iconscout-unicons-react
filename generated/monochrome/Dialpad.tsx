import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDialpad = (
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
    <circle cx={12} cy={9} r={2} opacity={0.5} />
    <circle cx={12} cy={3} r={2} opacity={0.5} />
    <circle cx={12} cy={15} r={2} opacity={0.5} />
    <circle cx={6} cy={9} r={2} opacity={0.5} />
    <circle cx={6} cy={3} r={2} opacity={0.5} />
    <circle cx={6} cy={15} r={2} opacity={0.5} />
    <circle cx={18} cy={9} r={2} opacity={0.5} />
    <circle cx={18} cy={3} r={2} opacity={0.5} />
    <circle cx={18} cy={15} r={2} opacity={0.5} />
    <circle cx={12} cy={21} r={2} opacity={0.5} />
  </svg>
)
const ForwardRef = forwardRef(SvgDialpad)
export default ForwardRef
