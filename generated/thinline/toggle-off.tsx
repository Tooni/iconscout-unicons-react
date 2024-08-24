import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgToggleOff = (
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
    <path d="M7.5 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9-7h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11m0 10h-9a4.5 4.5 0 1 1 0-9h9a4.5 4.5 0 1 1 0 9" />
  </svg>
)
const ForwardRef = forwardRef(SvgToggleOff)
export default ForwardRef
