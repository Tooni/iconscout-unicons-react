import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgClockTwo = (
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
    <circle cx={12} cy={12} r={10} opacity={0.5} />
    <path
      d="M11 7a1 1 0 0 1 2 0v3.268l1.098-.634a1 1 0 0 1 1 1.732l-2.598 1.5A1.014 1.014 0 0 1 11 12Z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClockTwo)
export default ForwardRef
