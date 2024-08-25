import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgPolygon = (
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
    <path d="m21.934 11.751-4.75-8.255a.5.5 0 0 0-.434-.25h-9.5a.5.5 0 0 0-.434.25l-4.75 8.255a.5.5 0 0 0 0 .498l4.75 8.255c.09.155.255.25.434.25h9.5a.5.5 0 0 0 .434-.25l4.75-8.255a.5.5 0 0 0 0-.498m-5.473 8.004H7.539L3.077 12 7.54 4.245h8.922L20.923 12z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPolygon)
export default ForwardRef
