import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLockOpenAlt = (
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
      d="M8 11a1 1 0 0 1-1-.999V7a5.002 5.002 0 0 1 8.532-3.542 5.1 5.1 0 0 1 1.307 2.293 1 1 0 1 1-1.937.501v-.003a3.06 3.06 0 0 0-.786-1.379A3.002 3.002 0 0 0 9 7v3a1 1 0 0 1-.999 1zm5.5 3.5a1.5 1.5 0 1 0-3 0c0 .443.195.836.5 1.11v1.392A1 1 0 0 0 12 18h.001A1 1 0 0 0 13 17v-1.39c.305-.274.5-.667.5-1.11"
      opacity={0.5}
    />
    <path
      d="M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-4 6.61V17a1 1 0 0 1-.999 1H12a1 1 0 0 1-1-.999V15.61a1.5 1.5 0 0 1-.5-1.11 1.5 1.5 0 1 1 3 0c0 .443-.195.836-.5 1.11"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLockOpenAlt)
export default ForwardRef
