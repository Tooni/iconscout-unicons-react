import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWindowMaximize = (
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
    <path d="M2 8h20v2H2z" opacity={0.25} />
    <path
      d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1"
      opacity={1}
    />
    <path
      d="M2 10h20v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
      opacity={0.5}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowMaximize)
export default ForwardRef
