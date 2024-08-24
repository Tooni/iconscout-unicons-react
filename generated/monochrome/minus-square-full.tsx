import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMinusSquareFull = (
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
      d="M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      className="minus-square-full_svg__uim-primary"
    />
    <path
      d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-4 11H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      className="minus-square-full_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMinusSquareFull)
export default ForwardRef
