import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCrosshair = (
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
    <path d="M21 11h-1.07A8 8 0 0 0 13 4.07V3a1 1 0 0 0-2 0v1.07A8 8 0 0 0 4.07 11H3a1 1 0 0 0 0 2h1.07A8 8 0 0 0 11 19.93V21a1 1 0 0 0 2 0v-1.07A8 8 0 0 0 19.93 13H21a1 1 0 0 0 0-2m-4 2h.91A6 6 0 0 1 13 17.91V17a1 1 0 0 0-2 0v.91A6 6 0 0 1 6.09 13H7a1 1 0 0 0 0-2h-.91A6 6 0 0 1 11 6.09V7a1 1 0 0 0 2 0v-.91A6 6 0 0 1 17.91 11H17a1 1 0 0 0 0 2m-5-2a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCrosshair)
export default ForwardRef
