import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlignLeft = (
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
    <path d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m0 4h14a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 2H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-4 4H3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignLeft)
export default ForwardRef
