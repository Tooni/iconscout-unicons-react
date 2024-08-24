import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPrevious = (
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
    <path d="M16.7 15.3 13.4 12l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-4 4c-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4M8 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgPrevious)
export default ForwardRef
