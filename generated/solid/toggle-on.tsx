import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgToggleOn = (
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
    <path d="M16.5 6.5h-9C4.5 6.5 2 9 2 12s2.5 5.5 5.5 5.5h9c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5m0 8c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S19 10.6 19 12s-1.1 2.5-2.5 2.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgToggleOn)
export default ForwardRef
