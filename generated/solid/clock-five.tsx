import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClockFive = (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m2 13.7c-.5.3-1.1.1-1.4-.4l-1.5-2.8c-.1-.2-.1-.3-.1-.5V7c0-.6.4-1 1-1s1 .4 1 1v4.7l1.4 2.6c.2.5.1 1.1-.4 1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgClockFive)
export default ForwardRef
