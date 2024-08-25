import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgAngleDoubleDown = (
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
      d="M12 11.75a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 9.336l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293m0 5.5a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 14.836l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleDown)
export default ForwardRef
