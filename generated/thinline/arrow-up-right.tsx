import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowUpRight = (
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
    <path d="M17.452 6H6.547a.548.548 0 0 0 0 1.096h9.585l-9.97 9.97a.545.545 0 1 0 .772.772l9.97-9.971v9.586a.548.548 0 0 0 1.096 0V6.546A.55.55 0 0 0 17.452 6" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowUpRight)
export default ForwardRef
