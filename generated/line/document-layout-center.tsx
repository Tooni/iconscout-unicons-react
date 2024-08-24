import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDocumentLayoutCenter = (
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
    <path d="M9 12h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m1-6h4v4h-4Zm11 4h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m-2-2h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2M3 8h2a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m0 4h2a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-8 4H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentLayoutCenter)
export default ForwardRef
