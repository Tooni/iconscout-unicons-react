import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCelsius = (
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
    <path d="M21 19h-6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h6a1 1 0 0 0 0-2h-6a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h6a1 1 0 0 0 0-2M5 3a3 3 0 1 0 3 3 3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCelsius)
export default ForwardRef