import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgWebSection = (
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
    <path d="M2 3v18c0 .6.4 1 1 1h11V2H3c-.6 0-1 .4-1 1m19-1h-5v20h5c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgWebSection)
export default ForwardRef
