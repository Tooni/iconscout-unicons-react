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
    <path d="M17 6a1 1 0 0 0-1 1v7.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H7a1 1 0 0 0 0 2h10a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 18 17V7a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDownRight)
export default ForwardRef
