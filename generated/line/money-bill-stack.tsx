import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMoneyBillStack = (
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
    <path d="M20 1H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3M8 21H4a1 1 0 0 1-1-1v-1.18A3 3 0 0 0 4 19h4Zm0-4H4a1 1 0 0 1-1-1v-1.18A3 3 0 0 0 4 15h4Zm0-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4Zm6 8h-4v-6h4Zm0-8h-4V3h4Zm7 7a1 1 0 0 1-1 1h-4v-2h4a3 3 0 0 0 1-.18Zm0-4a1 1 0 0 1-1 1h-4v-2h4a3 3 0 0 0 1-.18Zm0-4a1 1 0 0 1-1 1h-4V3h4a1 1 0 0 1 1 1Zm-3-5a1 1 0 1 0 1 1 1 1 0 0 0-1-1M6 9a1 1 0 1 0-1-1 1 1 0 0 0 1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgMoneyBillStack)
export default ForwardRef
