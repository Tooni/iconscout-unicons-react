import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMapMarkerMinus = (
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
    <path d="M14 9.45h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m6.46.18A8.5 8.5 0 1 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83m-3.86 5.42-4.6 4.6-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0 6.57 6.57 0 0 1 2.89 4.81 6.49 6.49 0 0 1-1.87 5.24" />
  </svg>
)
const ForwardRef = forwardRef(SvgMapMarkerMinus)
export default ForwardRef
