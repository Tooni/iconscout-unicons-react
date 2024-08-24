import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLinkH = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10 17H7A5 5 0 0 1 7 7h3a1 1 0 0 1 0 2H7a3 3 0 0 0 0 6h3a1 1 0 0 1 0 2m7 0h-3a1 1 0 0 1 0-2h3a3 3 0 0 0 0-6h-3a1 1 0 0 1 0-2h3a5 5 0 0 1 0 10"
      className="link-h_svg__uim-primary"
    />
    <path
      d="M15 13H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2"
      className="link-h_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLinkH)
export default ForwardRef
