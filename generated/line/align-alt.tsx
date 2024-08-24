import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlignAlt = (
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
    <path d="M10 11H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m0 8H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m4-14h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2m-4 2H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m0 8H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m0-12H7a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m11 4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m0 4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m-4 8h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m4-4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignAlt)
export default ForwardRef
