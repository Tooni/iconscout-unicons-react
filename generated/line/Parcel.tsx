import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgParcel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M7 14h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m6 2H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m6-14H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-5 2v3.29l-1.51-.84a1 1 0 0 0-1 0L10 7.29V4Zm6 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v5a1 1 0 0 0 .5.86 1 1 0 0 0 1 0L12 8.47l2.51 1.4A1 1 0 0 0 15 10a1 1 0 0 0 1-1V4h3a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgParcel)
export default ForwardRef
