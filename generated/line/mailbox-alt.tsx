import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMailboxAlt = (
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
    <path d="M11 13h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2m8 7h-1V9h1a1 1 0 0 0 0-2h-1.09A6 6 0 0 0 6.09 7H5a1 1 0 0 0 0 2h1v11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M12 4a4 4 0 0 1 3.86 3H8.14A4 4 0 0 1 12 4m4 16H8v-2h8Zm0-4H8V9h8Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMailboxAlt)
export default ForwardRef
