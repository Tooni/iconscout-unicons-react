import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMedkit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M10 17h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2m9-11h-2V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9Zm11 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMedkit)
export default ForwardRef
