import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgFlask = (
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
    <path d="M20.11 17.49 15 8.73V4h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2h1v4.73l-5.11 8.76A3 3 0 0 0 6.48 22h11a3 3 0 0 0 2.59-4.51Zm-9.25-8A1 1 0 0 0 11 9V4h2v5a1 1 0 0 0 .14.5L14 11h-4Zm7.52 10a1 1 0 0 1-.86.5h-11a1 1 0 0 1-.86-.5 1 1 0 0 1 0-1L8.83 13h6.35l3.2 5.5a1 1 0 0 1 0 1ZM10 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 1a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgFlask)
export default ForwardRef
