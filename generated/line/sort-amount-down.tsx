import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSortAmountDown = (
  { size = 24, color = 'currentColor', ...props }: UniconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    height={size}
    width={size}
    fill={color}
    ref={ref}
    {...props}
  >
    <path d="m6.29 14.29-.29.3V7a1 1 0 0 0-2 0v7.59l-.29-.3a1 1 0 0 0-1.42 1.42l2 2a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2-2a1 1 0 0 0-1.42-1.42M11 8h10a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2m10 3H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0 5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSortAmountDown)
export default ForwardRef
