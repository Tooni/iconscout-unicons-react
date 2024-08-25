import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgVectorSquare = (
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
    <path d="M19.5 16.05v-8.1A3 3 0 0 0 22 5a2.994 2.994 0 0 0-5.95-.5h-8.1A2.994 2.994 0 0 0 2 5a2.994 2.994 0 0 0 2.5 2.95v8.1A2.994 2.994 0 0 0 5 22a3 3 0 0 0 2.95-2.5h8.1A2.994 2.994 0 0 0 22 19a2.994 2.994 0 0 0-2.5-2.95M19 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4m11.05-2.5h-8.1a2.99 2.99 0 0 0-2.45-2.45v-8.1A2.99 2.99 0 0 0 7.95 5.5h8.1a2.99 2.99 0 0 0 2.45 2.45v8.1a2.99 2.99 0 0 0-2.45 2.45M19 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
)
const ForwardRef = forwardRef(SvgVectorSquare)
export default ForwardRef
