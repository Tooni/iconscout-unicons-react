import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClockSeven = (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 10c0 .2-.1.3-.1.4l-1.5 2.8c-.3.5-.9.7-1.4.4s-.7-.9-.4-1.4l1.4-2.6V7c0-.6.4-1 1-1s1 .4 1 1z" />
  </svg>
)
const ForwardRef = forwardRef(SvgClockSeven)
export default ForwardRef
