import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgCloudRedo = (
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
    <path d="M15 12.5a1 1 0 0 0-.91.6 4 4 0 1 0 .55 6.4 1 1 0 1 0-1.32-1.5 2 2 0 0 1-1.32.5 2 2 0 1 1 1-3.75h-.22a1 1 0 0 0 0 2H15a1 1 0 0 0 1-1V13.5a1 1 0 0 0-1-1m3.42-4.78A7 7 0 0 0 5.06 9.61a4 4 0 0 0-.38 7.66 1.1 1.1 0 0 0 .32.05 1 1 0 0 0 .32-2A2 2 0 0 1 4 13.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1 1 0 1 0 1 1.74A5 5 0 0 0 22 12.5a5 5 0 0 0-3.58-4.78" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudRedo)
export default ForwardRef