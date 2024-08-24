import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDocumentLayoutLeft = (
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
    <path d="M3 12h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m1-6h4v4H4Zm9 2h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2m0 10H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m8-4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentLayoutLeft)
export default ForwardRef
