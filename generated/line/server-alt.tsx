import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgServerAlt = (
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
    <path d="M8 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m12 0a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a3 3 0 0 0 .78 2A3 3 0 0 0 4 11v2a3 3 0 0 0 .78 2A3 3 0 0 0 4 17v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2 3 3 0 0 0 .78-2v-2a3 3 0 0 0-.78-2A3 3 0 0 0 20 7Zm-2 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgServerAlt)
export default ForwardRef
