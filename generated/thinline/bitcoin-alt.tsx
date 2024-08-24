import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBitcoinAlt = (
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
    <path d="M15.722 11.548A3.735 3.735 0 0 0 13.25 5H12V3.5a.5.5 0 0 0-1 0V5H8V3.5a.5.5 0 0 0-1 0V5H5.5a.5.5 0 0 0 0 1H7v12H5.5a.5.5 0 0 0 0 1H7v1.5a.5.5 0 0 0 1 0V19h3v1.5a.5.5 0 0 0 1 0V19h3.25a3.74 3.74 0 0 0 .472-7.452M8 6h5.25a2.75 2.75 0 1 1 0 5.5H8zm7.25 12H8v-5.5h7.25a2.75 2.75 0 1 1 0 5.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgBitcoinAlt)
export default ForwardRef
