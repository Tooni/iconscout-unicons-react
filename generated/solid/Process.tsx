import * as React from 'react'
import { Ref, forwardRef } from 'react'
import { UniconProps } from '../UniconProps'
const SvgProcess = (
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
    <path d="M8.5 6H6.7C8.2 4.7 10 4 12 4c.3 0 .6 0 .9.1.5.1 1-.3 1.1-.9.1-.5-.3-1-.9-1.1-.4-.1-.7-.1-1.1-.1-2.4 0-4.7.9-6.5 2.4V3c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1M7 14.5c-.6 0-1 .4-1 1v1.8C4.7 15.8 4 14 4 12c0-.3 0-.6.1-.9.1-.5-.3-1-.9-1.1-.5-.1-1 .3-1.1.9-.1.4-.1.7-.1 1.1 0 2.4.9 4.7 2.4 6.5H3c-.6 0-1 .4-1 1s.4 1 1 1h4c.3 0 .6-.2.8-.4 0-.1.1-.2.1-.3v-4.3c.1-.6-.3-1-.9-1m14-9c.6 0 1-.4 1-1s-.4-1-1-1h-4.2c-.1 0-.2.1-.3.1-.1.1-.2.1-.2.2s-.1.2-.1.2v4.3c0 .6.4 1 1 1s1-.4 1-1V6.7c1.3 1.4 2 3.3 2 5.3 0 .3 0 .6-.1.9-.1.5.3 1 .9 1.1h.1c.5 0 .9-.4 1-.9 0-.4.1-.7.1-1.1 0-2.4-.9-4.7-2.4-6.5zm-.7 11-.3-.3c-.1-.1-.2-.1-.3-.1h-4.2c-.6 0-1 .4-1 1s.4 1 1 1h1.8c-1.4 1.3-3.3 2-5.3 2-.3 0-.6 0-.9-.1-.5-.1-1 .3-1.1.9s.3 1 .9 1.1c.4 0 .7.1 1.1.1 2.4 0 4.7-.9 6.5-2.4V21c0 .6.4 1 1 1s1-.4 1-1v-4c0-.2-.1-.4-.2-.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgProcess)
export default ForwardRef
