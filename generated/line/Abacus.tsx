import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAbacus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M21 2a1 1 0 0 0-1 1v3h-4V5a1 1 0 0 0-2 0v1h-2V5a1 1 0 0 0-2 0v1H8V5a1 1 0 0 0-2 0v1H4V3a1 1 0 0 0-2 0v16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1m-1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3h2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-1h2Zm0-5h-2v-1a1 1 0 0 0-2 0v1h-4v-1a1 1 0 0 0-2 0v1H8v-1a1 1 0 0 0-2 0v1H4V8h2v1a1 1 0 0 0 2 0V8h2v1a1 1 0 0 0 2 0V8h2v1a1 1 0 0 0 2 0V8h4Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAbacus)
export default ForwardRef
