import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSlidersVAlt = (
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
    <path d="M20 8.18V3a1 1 0 0 0-2 0v5.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-7.18a3 3 0 0 0 0-5.64M19 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1m-6 2.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64M12 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1M6 6.18V3a1 1 0 0 0-2 0v3.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-9.18a3 3 0 0 0 0-5.64M5 10a1 1 0 1 1 1-1 1 1 0 0 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgSlidersVAlt)
export default ForwardRef
