import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowCircleRight = (
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
      d="m12.707 16.707 4-4a1.004 1.004 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L13.586 11H8a1 1 0 0 0 0 2h5.586l-2.293 2.293a1 1 0 0 0 1.414 1.414"
      className="arrow-circle-right_svg__uim-primary"
    />
    <path
      d="M22 12a10 10 0 1 0-10 10 10.01 10.01 0 0 0 10-10m-10.707 4.707a1 1 0 0 1 0-1.414L13.586 13H8a1 1 0 0 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1.004 1.004 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0"
      className="arrow-circle-right_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowCircleRight)
export default ForwardRef
