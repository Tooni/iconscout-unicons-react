import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMoneybagAlt = (
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
    <path d="M19 7h-3V6a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3m-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm-6 4a1 1 0 0 1 1-1h1a2 2 0 0 1-2 2Zm1 9a1 1 0 0 1-1-1v-1a2 2 0 0 1 2 2Zm15-1a1 1 0 0 1-1 1h-1a2 2 0 0 1 2-2Zm0-3a4 4 0 0 0-4 4H8a4 4 0 0 0-4-4v-2a4 4 0 0 0 4-4h8a4 4 0 0 0 4 4Zm0-4a2 2 0 0 1-2-2h1a1 1 0 0 1 1 1Zm-8 0a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgMoneybagAlt)
export default ForwardRef
