import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowDownRight = (
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
      d="M17 18H7a1 1 0 0 1 0-2h9V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1"
      className="arrow-down-right_svg__uim-primary"
    />
    <path
      d="M17 18a1 1 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18"
      className="arrow-down-right_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDownRight)
export default ForwardRef
