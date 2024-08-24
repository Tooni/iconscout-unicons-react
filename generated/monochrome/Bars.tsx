import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBars = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 13H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0-10H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2"
      className="bars_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBars)
export default ForwardRef
