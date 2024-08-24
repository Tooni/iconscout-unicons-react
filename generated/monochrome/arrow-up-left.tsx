import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowUpLeft = (
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
      d="M7 18a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H8v9a1 1 0 0 1-1 1"
      className="arrow-up-left_svg__uim-primary"
    />
    <path
      d="M17 18a1 1 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18"
      className="arrow-up-left_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowUpLeft)
export default ForwardRef
