import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClockSeven = (
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
    <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8m0-14a1 1 0 0 0-1 1v4.749l-1.382 2.578a1 1 0 0 0 1.764.944l1.5-2.799A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgClockSeven)
export default ForwardRef
