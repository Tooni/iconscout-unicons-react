import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAnchor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M19.5 13.5h-3a.5.5 0 0 0 0 1h2.482a7 7 0 0 1-6.482 6.482V11h2a.5.5 0 0 0 0-1h-2V7.95A3 3 0 0 0 15 5a3 3 0 1 0-6 0 2.994 2.994 0 0 0 2.5 2.95V10h-2a.5.5 0 0 0 0 1h2v9.974c-3.419-.241-6.23-2.956-6.482-6.474H7.5a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5 8.01 8.01 0 0 0 8 8 8.01 8.01 0 0 0 8-8 .5.5 0 0 0-.5-.5M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
  </svg>
)
const ForwardRef = forwardRef(SvgAnchor)
export default ForwardRef
