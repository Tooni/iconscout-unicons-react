import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleDoubleRight = (
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
    <path d="M8.5 8.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L9.3 12 7 14.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l3-3c.4-.4.4-1 0-1.4zm8.5 3-3-3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l3-3c.3-.4.3-1 0-1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleRight)
export default ForwardRef
