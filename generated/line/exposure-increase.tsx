import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExposureIncrease = (
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
    <path d="M11 7h-1V6a1 1 0 0 0-2 0v1H7a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V9h1a1 1 0 0 0 0-2m2 11h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m6-16H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M4 18.59V5a1 1 0 0 1 1-1h13.59ZM20 19a1 1 0 0 1-1 1H5.41L20 5.41Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgExposureIncrease)
export default ForwardRef
