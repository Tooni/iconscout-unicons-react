import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowUpRight = (
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
      d="M17 18a1 1 0 0 1-1-1V8H7a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1"
      className="arrow-up-right_svg__uim-primary"
    />
    <path
      d="M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A1 1 0 0 1 7 18"
      className="arrow-up-right_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowUpRight)
export default ForwardRef
