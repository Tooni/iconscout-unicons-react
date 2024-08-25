import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgUserArrows = (
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
    <path d="M6.6 6.9c0 .1.1.2.2.3l2 2c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.3-.3h4.2l-.3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l2-2c.1-.1.2-.2.2-.3s.1-.2.1-.4c0-.1 0-.3-.1-.4s-.1-.2-.2-.3l-2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.3.3H9.9l.3-.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2 2c-.1.1-.2.2-.2.3s-.1.2-.1.4c0 .1 0 .3.1.4M6 14.7c1.4 0 2.6-1.2 2.6-2.6S7.4 9.5 6 9.5s-2.6 1.2-2.6 2.6 1.2 2.6 2.6 2.6m3.8 2.7c-2.6-2.1-6.4-1.7-8.5.9q-.3.45-.3.9c0 .7.6 1.3 1.3 1.3h7.4c.5 0 1-.3 1.2-.7s.2-1-.2-1.4c-.3-.4-.6-.7-.9-1m5.6-5.3c0 1.4 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6-1.2-2.6-2.6-2.6-2.6 1.2-2.6 2.6m7.3 6.3c-.3-.3-.6-.7-.9-.9-2.6-2.1-6.4-1.7-8.5.9-.2.2-.3.5-.3.8 0 .7.6 1.3 1.3 1.3h7.4c.5 0 1-.3 1.2-.7.2-.5.1-1-.2-1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgUserArrows)
export default ForwardRef
