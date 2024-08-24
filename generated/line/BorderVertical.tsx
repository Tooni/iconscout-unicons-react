import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderVertical = (
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
    <path d="M3 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m16-2a1 1 0 1 0-1-1 1 1 0 0 0 1 1M7 11a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1M7 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1M3 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m16-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4 0a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1m4 16a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-8a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderVertical)
export default ForwardRef