import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleDoubleUp = (
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
      d="M15 17.25a1 1 0 0 1-.707-.293L12 14.664l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 17.25m0-5.5a1 1 0 0 1-.707-.293L12 9.164l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 11.75"
      className="angle-double-up_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleUp)
export default ForwardRef
