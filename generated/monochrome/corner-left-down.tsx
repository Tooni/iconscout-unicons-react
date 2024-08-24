import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCornerLeftDown = (
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
      d="M21 4.314h-9.372a5.006 5.006 0 0 0-5 5v6.957l-2.921-2.92a1 1 0 0 0-1.414 1.413l4.628 4.628a1.003 1.003 0 0 0 1.415 0l4.628-4.628a1 1 0 0 0-1.414-1.414l-2.922 2.922V9.314a3.003 3.003 0 0 1 3-3H21a1 1 0 0 0 0-2"
      className="corner-left-down_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerLeftDown)
export default ForwardRef
