import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowCircleRight = (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m3.7 10.7-3 3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l1.3-1.3H9c-.6 0-1-.4-1-1s.4-1 1-1h3.6l-1.3-1.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3 3c.4.4.4 1 0 1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowCircleRight)
export default ForwardRef
