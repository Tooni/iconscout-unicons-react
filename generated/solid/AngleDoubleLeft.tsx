import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleDoubleLeft = (
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
    <path d="M17 14.3 14.7 12 17 9.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3c.3-.4.3-1 0-1.4M9.2 12l2.3-2.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleLeft)
export default ForwardRef
