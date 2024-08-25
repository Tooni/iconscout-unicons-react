import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgHeadSideCough = (
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
    <path d="M6 16c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m-4 1c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1m3 3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1M16.2 2c-4-.1-7.2 2.9-7.3 6.9v.2l-1.8 3.8c-.2.5 0 1.1.5 1.3.1.1.3.1.4.1h.9v1.8c0 1.1.9 1.9 1.9 1.9h.9v1.8c0 .6.4 1 1 1h8.7c.5-.2.8-.7.7-1.2l-.9-3L23 9.8v-.5c0-3.9-3-7.1-6.8-7.3" />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadSideCough)
export default ForwardRef
