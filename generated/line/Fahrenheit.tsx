import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFahrenheit = (
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
    <path d="M20.5 3h-7a3 3 0 0 0-3 3v14a1 1 0 0 0 2 0v-7h6a1 1 0 0 0 0-2h-6V6a1 1 0 0 1 1-1h7a1 1 0 0 0 0-2m-15 0a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgFahrenheit)
export default ForwardRef
