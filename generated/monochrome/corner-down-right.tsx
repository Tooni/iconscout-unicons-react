import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerDownRight = (
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
      d="M14.058 22a1 1 0 0 1-.707-1.707l3.92-3.921-3.92-3.922a1 1 0 1 1 1.414-1.414l4.628 4.629a1 1 0 0 1 0 1.414l-4.628 4.628a1 1 0 0 1-.707.293"
      opacity={1}
    />
    <path
      d="M18.686 17.372H9.314a5.006 5.006 0 0 1-5-5V3a1 1 0 0 1 2 0v9.372a3.003 3.003 0 0 0 3 3h9.372a1 1 0 0 1 0 2"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerDownRight)
export default ForwardRef
