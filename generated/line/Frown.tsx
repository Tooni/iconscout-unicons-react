import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgFrown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M8.36 15.33a1 1 0 0 0-.13 1.4 1 1 0 0 0 1.41.13 3.76 3.76 0 0 1 4.72 0 1 1 0 0 0 1.41-.13 1 1 0 0 0-.13-1.4 5.81 5.81 0 0 0-7.28 0M9 11a1 1 0 1 0-1-1 1 1 0 0 0 1 1m3-9a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m3-11a1 1 0 1 0 1 1 1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgFrown)
export default ForwardRef
