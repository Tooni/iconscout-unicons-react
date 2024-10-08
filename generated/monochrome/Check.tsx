import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCheck = (
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
      d="M9.84 17.08a1 1 0 0 1-.707-.293l-3.84-3.84a1 1 0 1 1 1.414-1.414l3.133 3.133 7.453-7.453a1 1 0 0 1 1.414 1.414l-8.16 8.16a1 1 0 0 1-.707.293"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCheck)
export default ForwardRef
