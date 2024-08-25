import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgLeftIndentAlt = (
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
    <path d="M21 17h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1m0-4h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1m-8-6h8c.6 0 1-.4 1-1s-.4-1-1-1h-8c-.6 0-1 .4-1 1s.4 1 1 1m8 2h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1M9 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1s1-.4 1-1V6c0-.6-.4-1-1-1m-4.4 7 1.1-.9c.4-.4.5-1 .1-1.4s-1-.5-1.4-.1l-2 1.7-.1.1c-.4.4-.3 1.1.1 1.4l2 1.7c.2.1.4.2.6.2.3 0 .6-.1.8-.4.4-.4.3-1.1-.1-1.4z" />
  </svg>
)
const ForwardRef = forwardRef(SvgLeftIndentAlt)
export default ForwardRef
