import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDiceFour = (
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
    <path d="M15 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1M9 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1m0 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m6-6a1 1 0 1 0 1 1 1 1 0 0 0-1-1m2-6H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDiceFour)
export default ForwardRef