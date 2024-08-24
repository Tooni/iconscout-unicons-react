import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExposureAlt = (
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
    <path d="M11 6H7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m8-4H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M4 18.59V5a1 1 0 0 1 1-1h13.59ZM20 19a1 1 0 0 1-1 1H5.41L20 5.41Zm-7-2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgExposureAlt)
export default ForwardRef
