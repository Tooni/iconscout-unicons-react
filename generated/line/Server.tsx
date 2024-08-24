import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgServer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M15 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m9 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-3-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-6 0H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m9-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 11v2a3 3 0 0 0 .78 2A3 3 0 0 0 2 17v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2v-2a3 3 0 0 0-.78-2A3 3 0 0 0 22 7Zm-2 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-5-2a1 1 0 1 0 1 1 1 1 0 0 0-1-1M9 5H6a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgServer)
export default ForwardRef
