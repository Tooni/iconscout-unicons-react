import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgDraggabledots = (
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
    <path d="M8.5 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2m0 7a2 2 0 1 0 2 2 2 2 0 0 0-2-2m7-10a2 2 0 1 0-2-2 2 2 0 0 0 2 2m-7-4a2 2 0 1 0 2 2 2 2 0 0 0-2-2m7 14a2 2 0 1 0 2 2 2 2 0 0 0-2-2m0-7a2 2 0 1 0 2 2 2 2 0 0 0-2-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgDraggabledots)
export default ForwardRef
