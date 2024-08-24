import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHeadphones = (
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
    <path d="M12 3A10 10 0 0 0 2 13v7a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H4a8 8 0 0 1 16 0h-2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h3a1 1 0 0 0 1-1v-7A10 10 0 0 0 12 3M6 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4v-4Zm14 4h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadphones)
export default ForwardRef
