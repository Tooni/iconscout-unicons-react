import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWindowSection = (
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
    <path d="M2 21c0 .6.4 1 1 1h5V10H2zm14 1h5c.6 0 1-.4 1-1V10h-6zm-6 0h4V10h-4zM21 2H3c-.6 0-1 .4-1 1v5h20V3c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowSection)
export default ForwardRef
