import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgMars = (
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
    <path d="M20.42 4.12a1 1 0 0 0-.54-.54 1 1 0 0 0-.38-.08h-4a1 1 0 0 0 0 2h1.59l-2.4 2.4a7 7 0 1 0 1.41 1.41l2.4-2.4V8.5a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38M14 17a5 5 0 1 1 0-7 5 5 0 0 1 0 7" />
  </svg>
)
const ForwardRef = forwardRef(SvgMars)
export default ForwardRef
