import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRulerCombined = (
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
    <path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V10h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 6h-2V7a1 1 0 0 0-2 0v1h-2V7a1 1 0 0 0-2 0v1h-2V7a1 1 0 0 0-2 0v1H7a1 1 0 0 0 0 2h1v2H7a1 1 0 0 0 0 2h1v2H7a1 1 0 0 0 0 2h1v2H4V4h16Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgRulerCombined)
export default ForwardRef
