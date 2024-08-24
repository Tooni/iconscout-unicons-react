import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHorizontalAlignLeft = (
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
    <path d="M21 10h-5V7a1 1 0 0 0-1-1H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-3h17a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M4 8h10v2H4Zm16 8H4v-4h16Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHorizontalAlignLeft)
export default ForwardRef
