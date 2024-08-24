import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleRightB = (
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
      d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
      className="angle-right-b_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleRightB)
export default ForwardRef
