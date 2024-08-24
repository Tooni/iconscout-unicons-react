import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVectorSquare = (
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
    <path d="M20 16.18V7.82A3 3 0 1 0 16.18 4H7.82A3 3 0 1 0 4 7.82v8.36A3 3 0 1 0 7.82 20h8.36A3 3 0 1 0 20 16.18M19 4a1 1 0 1 1-1 1 1 1 0 0 1 1-1M5 4a1 1 0 1 1-1 1 1 1 0 0 1 1-1m0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1m11.18-2H7.82A3 3 0 0 0 6 16.18V7.82A3 3 0 0 0 7.82 6h8.36A3 3 0 0 0 18 7.82v8.36A3 3 0 0 0 16.18 18M19 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgVectorSquare)
export default ForwardRef
