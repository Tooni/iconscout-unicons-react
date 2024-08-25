import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgX = (
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
    <path d="M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 1 1 0 0 0 0-2m7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0M16 3a1 1 0 0 0 0 2 3 3 0 0 1 3 3v8a3 3 0 0 1-3 3 1 1 0 0 0 0 2 5 5 0 0 0 5-5V8a5 5 0 0 0-5-5" />
  </svg>
)
const ForwardRef = forwardRef(SvgX)
export default ForwardRef
