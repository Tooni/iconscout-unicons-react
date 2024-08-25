import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCapsule = (
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
    <path d="M19.5 4.5a5.12 5.12 0 0 0-7.24 0L4.5 12.26a5.12 5.12 0 1 0 7.24 7.24l7.76-7.76a5.12 5.12 0 0 0 0-7.24m-9.18 13.59a3.21 3.21 0 0 1-4.41 0 3.13 3.13 0 0 1 0-4.41l3.18-3.18 4.41 4.41Zm7.77-7.77-3.18 3.18-4.41-4.41 3.18-3.18a3.12 3.12 0 0 1 4.41 4.41" />
  </svg>
)
const ForwardRef = forwardRef(SvgCapsule)
export default ForwardRef
