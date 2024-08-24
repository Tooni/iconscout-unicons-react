import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgServers = (
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
    <path d="M15 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4 0H9a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m0-6H9a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m8-3a3 3 0 0 0-3-3h-1a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3H4a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 1 14v2a3 3 0 0 0 3 3h1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h1a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2ZM5 17H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1a3 3 0 0 0 .78 2A3 3 0 0 0 5 17m0-6H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a3 3 0 0 0 .78 2A3 3 0 0 0 5 11m12 8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Zm4 9a1 1 0 0 1-1 1h-1a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2h1a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1h-1a3 3 0 0 0-.78-2A3 3 0 0 0 19 7h1a1 1 0 0 1 1 1Zm-6-5a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-4 0H9a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgServers)
export default ForwardRef
