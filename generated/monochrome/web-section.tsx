import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWebSection = (
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
    <path d="M14 2h2v20h-2z" className="web-section_svg__uim-quaternary" />
    <path
      d="M3 2h11v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
      className="web-section_svg__uim-tertiary"
    />
    <path
      d="M16 2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-5z"
      className="web-section_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWebSection)
export default ForwardRef
