import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAnalysis = (
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
      d="M14 16a1 1 0 0 1-.707-1.707l7-7a1 1 0 0 1 1.414 1.414l-7 7A1 1 0 0 1 14 16M3 17a1 1 0 0 1-.707-1.707l6-6a1 1 0 0 1 1.414 1.414l-6 6A1 1 0 0 1 3 17"
      opacity={1}
    />
    <path
      d="M14 16a1 1 0 0 1-.707-.293l-5-5a1 1 0 0 1 1.414-1.414l5 5A1 1 0 0 1 14 16"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAnalysis)
export default ForwardRef
