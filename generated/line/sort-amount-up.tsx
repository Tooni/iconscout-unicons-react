import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgSortAmountUp = (
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
    <path d="M5.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2 2a1 1 0 0 0 1.42 1.42l.29-.3V17a1 1 0 0 0 2 0V9.41l.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM11 8h10a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2m10 8H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0-5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSortAmountUp)
export default ForwardRef
