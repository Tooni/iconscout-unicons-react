import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCornerDownRight = (
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
      d="M14.058 22a1 1 0 0 1-.707-1.707l3.92-3.921-3.92-3.922a1 1 0 1 1 1.414-1.414l4.628 4.629a1 1 0 0 1 0 1.414l-4.628 4.628a1 1 0 0 1-.707.293"
      className="corner-down-right_svg__uim-primary"
    />
    <path
      d="M18.686 17.372H9.314a5.006 5.006 0 0 1-5-5V3a1 1 0 0 1 2 0v9.372a3.003 3.003 0 0 0 3 3h9.372a1 1 0 0 1 0 2"
      className="corner-down-right_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerDownRight)
export default ForwardRef
