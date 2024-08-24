import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRightIndentAlt = (
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
      d="M21 19h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2"
      className="right-indent-alt_svg__uim-tertiary"
    />
    <path
      d="M9 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m-6-4.333a1 1 0 0 1-.64-1.769L3.438 12l-1.078-.898a1 1 0 0 1 1.28-1.538l2 1.667a1 1 0 0 1 0 1.538l-2 1.667a1 1 0 0 1-.64.231"
      className="right-indent-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRightIndentAlt)
export default ForwardRef
