import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgChartBarAlt = (
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
    <path d="M21 20H4v-2h3a1 1 0 0 0 0-2H4v-2h11a1 1 0 0 0 0-2H4v-2h7a1 1 0 0 0 0-2H4V6h15a1 1 0 0 0 0-2H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgChartBarAlt)
export default ForwardRef
