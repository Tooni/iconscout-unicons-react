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
    <path
      d="M16.313 11.24A3.998 3.998 0 0 0 13 5V4a1 1 0 0 0-2 0v1H9V4a1 1 0 0 0-2 0v1H6a1 1 0 0 0 0 2h1v10H6a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2a3.99 3.99 0 0 0 1.313-7.76M15 9a2 2 0 0 1-2 2H9V7h4a2 2 0 0 1 2 2m0 8H9v-4h6a2 2 0 0 1 0 4"
      className="bitcoin-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBitcoinAlt)
export default ForwardRef
