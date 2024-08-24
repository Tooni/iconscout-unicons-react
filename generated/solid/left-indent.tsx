import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLeftIndent = (
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
    <path d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m0 4h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 6H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1M3 15h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18.8-5.3c-.4-.4-1-.5-1.4-.1l-2 1.7-.1.1c-.4.4-.3 1.1.1 1.4l2 1.7c.2.1.4.2.6.2.3 0 .6-.1.8-.4.4-.4.3-1.1-.1-1.4l-1.1-.9 1.1-.9c.4-.4.4-1 .1-1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgLeftIndent)
export default ForwardRef
