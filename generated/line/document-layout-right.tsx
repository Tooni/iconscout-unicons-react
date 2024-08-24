import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDocumentLayoutRight = (
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
    <path d="M13 18H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M3 8h8a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m0 4h8a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 6h-4V6h4Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentLayoutRight)
export default ForwardRef
