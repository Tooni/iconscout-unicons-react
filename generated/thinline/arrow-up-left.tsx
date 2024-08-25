import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowUpLeft = (
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
    <path d="M7.868 7.096h9.584a.548.548 0 0 0 0-1.096H6.548A.55.55 0 0 0 6 6.548v10.904a.548.548 0 1 0 1.096 0V7.867l9.97 9.97a.543.543 0 0 0 .773 0 .545.545 0 0 0-.001-.77z" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowUpLeft)
export default ForwardRef
