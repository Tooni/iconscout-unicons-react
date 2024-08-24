import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlignRight = (
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
      d="M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 4H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 4H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2"
      className="align-right_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignRight)
export default ForwardRef
