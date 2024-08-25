import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHorizontalAlignLeft = (
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
    <path d="M16 10H4V6h11a1 1 0 0 1 1 1z" opacity={0.5} />
    <path
      d="M21 18H4v-8h17a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1"
      opacity={1}
    />
    <path
      d="M3 22a1 1 0 0 1-1-.999V3a1 1 0 0 1 2 0v18a1 1 0 0 1-.999 1z"
      opacity={0.25}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHorizontalAlignLeft)
export default ForwardRef
