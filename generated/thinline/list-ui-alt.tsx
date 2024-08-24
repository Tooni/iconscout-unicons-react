import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgListUiAlt = (
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
    <path d="M3.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4 0h14a.5.5 0 0 0 0-1h-14a.5.5 0 0 0 0 1m14 4h-10a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1m0 5h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1m-14-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgListUiAlt)
export default ForwardRef
