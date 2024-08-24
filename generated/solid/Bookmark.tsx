import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBookmark = (
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
    <path d="M16 2H8C6.3 2 5 3.3 5 5v16c0 .2 0 .3.1.5.3.5.9.6 1.4.4l5.5-3.2 5.5 3.2c.2.1.3.1.5.1.6 0 1-.4 1-1V5c0-1.7-1.3-3-3-3" />
  </svg>
)
const ForwardRef = forwardRef(SvgBookmark)
export default ForwardRef
