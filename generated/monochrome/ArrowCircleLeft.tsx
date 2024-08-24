import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowCircleLeft = (
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
      d="m11.293 7.293-4 4a1.004 1.004 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 0 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414"
      className="arrow-circle-left_svg__uim-primary"
    />
    <path
      d="M2 12A10 10 0 1 0 12 2 10.01 10.01 0 0 0 2 12m10.707-4.707a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 0 1 0 2h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1.004 1.004 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0"
      className="arrow-circle-left_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowCircleLeft)
export default ForwardRef
