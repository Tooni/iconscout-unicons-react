import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgArrowDownLeft = (
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
    <path d="M17 16H9.41l8.3-8.29a1 1 0 1 0-1.42-1.42L8 14.59V7a1 1 0 0 0-2 0v10a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54A1 1 0 0 0 7 18h10a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDownLeft)
export default ForwardRef
