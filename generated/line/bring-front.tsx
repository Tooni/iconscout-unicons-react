import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgBringFront = (
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
    <path d="M11.29 17.3 10 18.59V7a1 1 0 0 0-2 0v11.6l-1.29-1.3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0M22 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H4V4h16v4h-7a1 1 0 0 0 0 2h1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9Zm-2 11h-4v-4h4Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBringFront)
export default ForwardRef
