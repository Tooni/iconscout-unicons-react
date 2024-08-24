import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExclude = (
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
    <path d="M9.54 7.54h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0 1 1 0 1 0 0-2m5.92 5.92a1 1 0 0 0-1 1 1 1 0 0 0 0 2h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1M21 7.54h-4.54V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12.46a1 1 0 0 0 1 1h4.54V21a1 1 0 0 0 1 1H21a1 1 0 0 0 1-1V8.54a1 1 0 0 0-1-1M20 20H9.54v-3.54a1 1 0 0 0 0-2 1 1 0 0 0-2 0H4V4h10.46v3.54a1 1 0 0 0 0 2 1 1 0 0 0 2 0H20Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgExclude)
export default ForwardRef
