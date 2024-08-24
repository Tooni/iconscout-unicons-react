import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExpandRight = (
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
    <path d="M8.5 14.1 4 18.6V17c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .1 0 .3.1.4.1.2.3.4.5.5.1.1.3.1.4.1h4c.6 0 1-.4 1-1s-.4-1-1-1H5.4l4.5-4.5c.4-.4.4-1 0-1.4s-1-.4-1.4 0M21.7 2.3c-.2-.2-.5-.3-.7-.3h-4c-.6 0-1 .4-1 1s.4 1 1 1h1.6l-4.5 4.5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L20 5.4V7c0 .6.4 1 1 1s1-.4 1-1V3c0-.2-.1-.5-.3-.7m-6.2 11.8L9.9 8.5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.7 5.7c.2.2.4.3.7.3s.5-.1.7-.3c.3-.4.3-1.1-.1-1.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgExpandRight)
export default ForwardRef
