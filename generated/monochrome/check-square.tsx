import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCheckSquare = (
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
      d="M10.2 16.4a1 1 0 0 1-.707-.293l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414l-6.8 6.8a1 1 0 0 1-.707.293"
      className="check-square_svg__uim-primary"
    />
    <path
      d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-3.293 7.307-6.8 6.8a1 1 0 0 1-1.414 0l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414"
      className="check-square_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckSquare)
export default ForwardRef
