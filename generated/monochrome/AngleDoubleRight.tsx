import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleDoubleRight = (
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
      d="M7.75 16a1 1 0 0 1-.707-1.707L9.336 12 7.043 9.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 7.75 16m5.5 0a1 1 0 0 1-.707-1.707L14.836 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-.707.293"
      className="angle-double-right_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleRight)
export default ForwardRef
