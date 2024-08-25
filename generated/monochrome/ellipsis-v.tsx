import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgEllipsisV = (
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
    <circle cx={12} cy={12} r={2} opacity={1} />
    <circle cx={12} cy={5} r={2} opacity={1} />
    <circle cx={12} cy={19} r={2} opacity={1} />
  </svg>
)
const ForwardRef = forwardRef(SvgEllipsisV)
export default ForwardRef
