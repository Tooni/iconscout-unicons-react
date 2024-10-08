import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMapMarkerEdit = (
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
    <path d="M20.46 9.63A8.5 8.5 0 1 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83m-3.86 5.42-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.57 6.57 0 0 1 2.89 4.81 6.49 6.49 0 0 1-1.87 5.24m-2.81-8.8a1 1 0 0 0-1.42 0L8.79 9.83a1 1 0 0 0-.29.7V13a1 1 0 0 0 1 1h2.42a1 1 0 0 0 .71-.29l3.58-3.58a1 1 0 0 0 0-1.41ZM11.51 12h-1v-1l2.58-2.58 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMapMarkerEdit)
export default ForwardRef
