import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWrapText = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M3 7.2h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m6 8H3c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1m9.5-5H3c-.6 0-1 .4-1 1s.4 1 1 1h15.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-2.8c.3-.4.4-.9 0-1.3s-1-.5-1.4-.1l-2 1.7-.1.1c-.4.4-.3 1.1.1 1.4l2 1.7c.2.1.4.2.6.2.3 0 .6-.1.8-.4.3-.4.3-.9 0-1.3h2.8c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgWrapText)
export default ForwardRef
