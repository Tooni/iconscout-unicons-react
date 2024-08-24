import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStretcher = (
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
    <path d="M18 4.5h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2m3 2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.55l5.11 2.56-2.58 1.29A3 3 0 0 0 5 15.5a3 3 0 1 0 3 3 2 2 0 0 0 0-.36l3.94-2 4.06 2.1a2 2 0 0 0 0 .26 3 3 0 1 0 3-3 3 3 0 0 0-2.15.92l-2.72-1.36 5.11-2.56H21a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-16 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1m14-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1m-7.1-3.56L9 12.5h5.75ZM20 10.5H4v-2h16Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgStretcher)
export default ForwardRef
