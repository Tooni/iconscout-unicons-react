import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWindSun = (
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
    <path d="M11 4.5a1 1 0 0 0 1-1v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1m-7 7a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1m.636 4.95-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 1 0-1.414-1.414m0-9.9A1 1 0 0 0 6.05 5.136l-.707-.707a1 1 0 0 0-1.414 1.414Zm12.021.293a1 1 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707M13 12a1 1 0 0 0 1 1h5a3.003 3.003 0 0 0 3-3 1 1 0 0 0-2 0 1.013 1.013 0 0 1-1 1h-5a1 1 0 0 0-1 1m7 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 0 2 1 1 0 0 0 0 2 3 3 0 0 0 0-6M9 19a1 1 0 1 0 1 1 1 1 0 0 0-1-1m6 0h-2a1 1 0 0 0 0 2h2a1.013 1.013 0 0 1 1 1 1 1 0 0 0 2 0 3.003 3.003 0 0 0-3-3m-4-4a3.5 3.5 0 0 1 0-7 3.4 3.4 0 0 1 2.188.774 1 1 0 1 0 1.265-1.548A5.4 5.4 0 0 0 11 6a5.5 5.5 0 0 0 0 11 1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgWindSun)
export default ForwardRef
