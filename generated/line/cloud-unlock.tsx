import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCloudUnlock = (
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
    <path d="M14 15.5h-3v-1a1 1 0 0 1 1.88-.5 1 1 0 0 0 1.37.34 1 1 0 0 0 .34-1.34 3 3 0 0 0-.46-.59A3 3 0 0 0 12 11.5a3 3 0 0 0-3 3v1.18a3 3 0 0 0 1 5.82h4a3 3 0 0 0 0-6m0 4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m4.42-12.78A7 7 0 0 0 5.06 8.61a4 4 0 0 0-.38 7.66 1.1 1.1 0 0 0 .32.05 1 1 0 0 0 .32-2A2 2 0 0 1 4 12.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1 1 0 1 0 1 1.74A5 5 0 0 0 22 11.5a5 5 0 0 0-3.58-4.78" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudUnlock)
export default ForwardRef
