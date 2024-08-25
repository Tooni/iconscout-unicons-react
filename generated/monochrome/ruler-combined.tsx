import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRulerCombined = (
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
      d="M14 10h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1zM9 6a1 1 0 0 0-1 1v1H7a1 1 0 0 0 0 2h3V7a1 1 0 0 0-1-1m1 6v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1z"
      opacity={1}
    />
    <path d="M10 12v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1Z" opacity={1} />
    <path
      d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
      opacity={0.5}
    />
    <path
      d="M10 16v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm8-6h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1z"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRulerCombined)
export default ForwardRef
