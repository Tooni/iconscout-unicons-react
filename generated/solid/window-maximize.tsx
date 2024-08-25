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
    <path d="M21 2H3c-.6 0-1 .4-1 1v5h20V3c0-.6-.4-1-1-1M2 21c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V10H2z" />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowMaximize)
export default ForwardRef
