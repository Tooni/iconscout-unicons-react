import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHistoryAlt = (
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
      d="M12 2a10.02 10.02 0 0 0-7 2.877V3a1 1 0 0 0-2 0v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.218A7.992 7.992 0 1 1 12 20a1 1 0 0 0 0 2 10 10 0 0 0 0-20"
      opacity={1}
    />
    <path
      d="M14 13h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2"
      opacity={1}
    />
    <path
      d="M12 4a8 8 0 0 0-5.782 2.5H8.5a1 1 0 0 1 0 2H4a.99.99 0 0 1-.976-.88A9.977 9.977 0 0 0 12 22a1 1 0 0 1 0-2 8 8 0 0 0 0-16m2 9h-2a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2h1a1 1 0 0 1 0 2"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHistoryAlt)
export default ForwardRef
