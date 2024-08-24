import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStopwatch = (
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
    <path d="M10 4.5h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1s.4 1 1 1m8.3 4.1.9-.9c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-.9.9C14 4.9 10 4.9 7.1 7.2l-.9-.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.9.9C3 12.1 3.6 17.1 7.1 19.8s8.5 2.1 11.2-1.4c2.3-2.9 2.3-6.9 0-9.8m-4.6 5.9c-.4.6-1 1-1.7 1-1.1 0-2-.9-2-2 0-.7.4-1.4 1-1.7V9.5c0-.6.4-1 1-1s1 .4 1 1v2.3c1 .5 1.3 1.7.7 2.7" />
  </svg>
)
const ForwardRef = forwardRef(SvgStopwatch)
export default ForwardRef
