import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlignLeft = (
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
      d="M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-4 4H3a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m4 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-4 4H3a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2"
      className="align-left_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignLeft)
export default ForwardRef
