import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVerticalDistributionTop = (
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
    <path d="M3 6h1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m3 0h12v4H6Zm15 8H3a1 1 0 0 0 0 2h2v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2a1 1 0 0 0 0-2m-4 4H7v-2h10Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgVerticalDistributionTop)
export default ForwardRef
