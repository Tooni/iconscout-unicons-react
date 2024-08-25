import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowDownRight = (
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
    <path d="M17.453 6a.55.55 0 0 0-.549.548v9.585l-9.97-9.971a.546.546 0 0 0-.772.771l9.97 9.971H6.549a.548.548 0 0 0 0 1.096h10.904a.55.55 0 0 0 .548-.548V6.548A.55.55 0 0 0 17.453 6" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDownRight)
export default ForwardRef
