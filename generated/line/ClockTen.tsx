import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClockTen = (
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
    <path d="M12 6a1 1 0 0 0-1 1v3.268l-1.098-.634a1 1 0 0 0-1 1.732l2.598 1.5A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1m0-4a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgClockTen)
export default ForwardRef