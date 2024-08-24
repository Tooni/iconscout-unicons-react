import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCornerDownLeft = (
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
      d="M9.942 22a1 1 0 0 1-.707-.293l-4.628-4.628a1 1 0 0 1 0-1.414l4.628-4.63a1 1 0 0 1 1.414 1.415l-3.92 3.922 3.92 3.921A1 1 0 0 1 9.942 22"
      className="corner-down-left_svg__uim-primary"
    />
    <path
      d="M15.686 17.372H5.314a1 1 0 0 1 0-2h10.372a2 2 0 0 0 2-2V3a1 1 0 0 1 2 0v10.372a4.004 4.004 0 0 1-4 4"
      className="corner-down-left_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerDownLeft)
export default ForwardRef
