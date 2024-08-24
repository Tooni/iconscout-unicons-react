import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderAlt = (
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
    <path d="M11.5 18.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1m9-15a1 1 0 0 0-1-1h-16a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0v-15h15a1 1 0 0 0 1-1m-5 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-8 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m12-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderAlt)
export default ForwardRef
