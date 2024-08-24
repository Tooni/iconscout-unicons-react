import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMeetingBoard = (
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
    <path d="M7 10h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m14-6h-8V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h4.59l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3V21a1 1 0 0 0 2 0v-1.59l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L14.41 18H19a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1m-1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h16ZM7 14h6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgMeetingBoard)
export default ForwardRef
