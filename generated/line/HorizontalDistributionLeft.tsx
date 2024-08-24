import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHorizontalDistributionLeft = (
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
    <path d="M11 4H6V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 14H6V6h4Zm9-13h-3V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-1 12h-2V7h2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHorizontalDistributionLeft)
export default ForwardRef
