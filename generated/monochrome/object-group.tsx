import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgObjectGroup = (
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
      d="M11 10h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1"
      opacity={0.5}
    />
    <path
      d="M10 11a1 1 0 0 1 1-1h3V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2zM4 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m16 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
      opacity={1}
    />
    <path
      d="M18.278 5a1.94 1.94 0 0 1 0-2H5.722a1.94 1.94 0 0 1 0 2zM20 18a2 2 0 0 1 1 .278V5.722a1.94 1.94 0 0 1-2 0v12.556A2 2 0 0 1 20 18M4 18a2 2 0 0 1 1 .278V5.722a1.94 1.94 0 0 1-2 0v12.556A2 2 0 0 1 4 18m14.278 1H5.722a1.94 1.94 0 0 1 0 2h12.556a1.94 1.94 0 0 1 0-2"
      opacity={0.25}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgObjectGroup)
export default ForwardRef
