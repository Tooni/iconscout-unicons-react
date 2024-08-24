import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWebGridAlt = (
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
      d="M22 8H2v2h9v12h2V10h9z"
      className="web-grid-alt_svg__uim-quaternary"
    />
    <path
      d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1"
      className="web-grid-alt_svg__uim-primary"
    />
    <path
      d="M2 10h9v12H3a1 1 0 0 1-1-1zm11 0h9v11a1 1 0 0 1-1 1h-8z"
      className="web-grid-alt_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWebGridAlt)
export default ForwardRef
