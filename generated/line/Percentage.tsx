import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPercentage = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M7.758 10.758a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3m0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1m8.484 6.484a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1m3.465-12.949a1 1 0 0 0-1.414 0l-14 14a1 1 0 1 0 1.414 1.414l14-14a1 1 0 0 0 0-1.414" />
  </svg>
)
const ForwardRef = forwardRef(SvgPercentage)
export default ForwardRef
