import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBorderAlt = (
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
      d="M3.5 20.5a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-15v15a1 1 0 0 1-1 1"
      opacity={1}
    />
    <circle cx={19.5} cy={11.5} r={1} opacity={0.5} />
    <circle cx={19.5} cy={7.5} r={1} opacity={0.5} />
    <circle cx={19.5} cy={15.5} r={1} opacity={0.5} />
    <circle cx={7.5} cy={19.5} r={1} opacity={0.5} />
    <circle cx={11.5} cy={19.5} r={1} opacity={0.5} />
    <circle cx={15.5} cy={19.5} r={1} opacity={0.5} />
    <circle cx={19.5} cy={19.5} r={1} opacity={0.5} />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderAlt)
export default ForwardRef
