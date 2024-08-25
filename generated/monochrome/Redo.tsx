import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRedo = (
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
    <path
      d="M19.875 8.5h-4.5a1 1 0 0 1 0-2h3.5V3a1 1 0 0 1 2 0v4.5a1 1 0 0 1-1 1"
      opacity={1}
    />
    <path
      d="M12 22a10 10 0 1 1 8.651-15.001 1 1 0 0 1-1.73 1.002A7.99 7.99 0 1 0 20 12a1 1 0 0 1 2 0 10.01 10.01 0 0 1-10 10"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRedo)
export default ForwardRef
