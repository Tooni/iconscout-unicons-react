import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFlipH = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M21 11H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m-4 4H7c-.3 0-.5.1-.7.3-.4.4-.4 1 0 1.4l5 5c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1m-1.6-7c0 .6.4 1 1 1h.6c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4l-.7-.7c-.3-.3-.8-.4-1.2-.2-.5.2-.7.8-.4 1.3zm-3.8-3.2.4-.4.8.8c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.1-1.1c-.1-.1-.2-.1-.3-.2 0-.1-.1-.2-.2-.3-.4-.4-1-.4-1.4 0l-1.1 1.1c-.4.4-.4 1 0 1.4s1.2.5 1.5.1M7.1 9c.3 0 .5-.1.7-.3l1.1-1.1c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.2 1c-.1.2-.2.5-.2.7 0 .6.4 1 1 1.1m3.8 0h1.5c.6 0 1-.4 1-1s-.4-1-1-1h-1.5c-.6 0-1 .4-1 1s.5 1 1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgFlipH)
export default ForwardRef
