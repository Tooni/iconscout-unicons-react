import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRobot = (
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
    <path d="M9 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-7-1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m20 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m-5-7h-4V5.72A2 2 0 0 0 14 4a2 2 0 0 0-4 0 2 2 0 0 0 1 1.72V7H7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3m-3.28 2-.5 2h-2.44l-.5-2ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1.22L9 12.24a1 1 0 0 0 1 .76h4a1 1 0 0 0 1-.76L15.78 9H17a1 1 0 0 1 1 1Zm-3-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgRobot)
export default ForwardRef
