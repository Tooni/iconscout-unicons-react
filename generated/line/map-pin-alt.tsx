import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMapPinAlt = (
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
    <path d="M11 11.9V17a1 1 0 0 0 2 0v-5.1a5 5 0 1 0-2 0M12 4a3 3 0 1 1-3 3 3 3 0 0 1 3-3m4.21 10.42a1 1 0 1 0-.42 2C18.06 16.87 19 17.68 19 18c0 .58-2.45 2-7 2s-7-1.42-7-2c0-.32.94-1.13 3.21-1.62a1 1 0 1 0-.42-2C4.75 15.08 3 16.39 3 18c0 2.63 4.53 4 9 4s9-1.37 9-4c0-1.61-1.75-2.92-4.79-3.58" />
  </svg>
)
const ForwardRef = forwardRef(SvgMapPinAlt)
export default ForwardRef
