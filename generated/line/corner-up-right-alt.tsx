import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCornerUpRightAlt = (
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
    <path d="M19.92 10.12a1 1 0 0 0-.21-.33l-3-3a1 1 0 1 0-1.42 1.42l1.3 1.29H7a3 3 0 0 0-3 3v4a1 1 0 0 0 2 0v-4a1 1 0 0 1 1-1h9.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerUpRightAlt)
export default ForwardRef
