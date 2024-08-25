import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWrapText = (
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
      d="M21 7.167H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-12 10H3a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2"
      opacity={0.5}
    />
    <path
      d="M18.5 17.167H15a1 1 0 0 1 0-2h3.5a1.5 1.5 0 0 0 0-3H3a1 1 0 0 1 0-2h15.5a3.5 3.5 0 1 1 0 7"
      opacity={1}
    />
    <path
      d="M14.999 18.833a1 1 0 0 1-.639-.231l-2-1.666a1 1 0 0 1 0-1.538l2-1.667a1 1 0 0 1 1.28 1.538l-1.078.898 1.078.897a1 1 0 0 1-.641 1.769"
      opacity={1}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWrapText)
export default ForwardRef
