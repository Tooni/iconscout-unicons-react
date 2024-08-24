import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRss = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M2.88 16.88a3 3 0 0 0 0 4.24 3 3 0 0 0 4.24 0 3 3 0 0 0-4.24-4.24m2.83 2.83a1 1 0 0 1-1.42-1.42 1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.42M5 12a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 0 0 2 0 7 7 0 0 0-7-7m0-4a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 0 0 2 0 11.08 11.08 0 0 0-3.22-7.78A11.08 11.08 0 0 0 5 8m10.61.39A15.1 15.1 0 0 0 5 4a1 1 0 0 0 0 2 13 13 0 0 1 13 13 1 1 0 0 0 2 0 15.1 15.1 0 0 0-4.39-10.61" />
  </svg>
)
const ForwardRef = forwardRef(SvgRss)
export default ForwardRef
