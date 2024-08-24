import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClockTwo = (
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
    <path d="M14.348 10.067 12.5 11.134V7a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .75.433l2.598-1.5a.5.5 0 1 0-.5-.866M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10 0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18 9.01 9.01 0 0 1 9 9 9 9 0 0 1-9 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgClockTwo)
export default ForwardRef
