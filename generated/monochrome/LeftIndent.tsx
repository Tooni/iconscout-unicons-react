import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLeftIndent = (
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
      d="M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m8 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8-4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      className="left-indent_svg__uim-tertiary"
    />
    <path
      d="M21 14.666a1 1 0 0 1-.64-.231l-2-1.667a1 1 0 0 1 0-1.536l2-1.667a1 1 0 0 1 1.64.769v3.333a1 1 0 0 1-1 1Z"
      className="left-indent_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLeftIndent)
export default ForwardRef