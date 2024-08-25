import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAngleDoubleLeft = (
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
      d="M16.25 16a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L14.664 12l2.293 2.293A1 1 0 0 1 16.25 16m-5.5 0a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L9.164 12l2.293 2.293A1 1 0 0 1 10.75 16"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleLeft)
export default ForwardRef
