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
    <path d="M11.29 11.46a1 1 0 0 0 1.42 0l3-3A1 1 0 1 0 14.29 7L12 9.34 9.71 7a1 1 0 1 0-1.42 1.46Zm3 1.08L12 14.84l-2.29-2.3A1 1 0 0 0 8.29 14l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0-1.42-1.42Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleDown)
export default ForwardRef
