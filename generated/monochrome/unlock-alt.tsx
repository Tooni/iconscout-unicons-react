import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUnlockAlt = (
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
      d="M8 11a1 1 0 0 1-1-1V7a5.002 5.002 0 0 1 8.532-3.542 5.1 5.1 0 0 1 1.306 2.293 1 1 0 0 1-1.934.505l-.002-.007a3.1 3.1 0 0 0-.786-1.379A3.002 3.002 0 0 0 9 7v3a1 1 0 0 1-1 1m4 7a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1"
      opacity={0.5}
    />
    <path
      d="M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-4 8a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUnlockAlt)
export default ForwardRef
