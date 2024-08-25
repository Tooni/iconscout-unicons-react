import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgRightIndent = (
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
    <path d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m0 4h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 6H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1M3 15h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m15-1.3c0 .6.4 1 1 1 .2 0 .5-.1.6-.2l2-1.7.1-.1c.4-.4.3-1.1-.1-1.4l-2-1.7c-.4-.4-1.1-.3-1.4.1-.4.4-.3 1.1.1 1.4l1.1.9-1.1.9c-.2.2-.3.5-.3.8" />
  </svg>
)
const ForwardRef = forwardRef(SvgRightIndent)
export default ForwardRef
