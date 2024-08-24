import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClockThree = (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m3 11h-3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1s1 .4 1 1v4h2c.6 0 1 .4 1 1s-.4 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgClockThree)
export default ForwardRef
