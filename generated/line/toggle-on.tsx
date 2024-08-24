import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgToggleOn = (
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
    <path d="M16 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 8.5m0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5M16 5H8a7 7 0 0 0 0 14h8a7 7 0 0 0 0-14m0 12H8A5 5 0 0 1 8 7h8a5 5 0 0 1 0 10" />
  </svg>
)
const ForwardRef = forwardRef(SvgToggleOn)
export default ForwardRef
