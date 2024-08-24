import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLeftIndent = (
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
    <path d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m0 4h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18.77-1.31a1 1 0 0 0-1.41-.12l-2 1.66a1 1 0 0 0 0 1.54l2 1.66a1 1 0 0 0 .64.24 1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-1.08-.9 1.08-.9a1 1 0 0 0 .13-1.41M21 17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2M3 15h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgLeftIndent)
export default ForwardRef
