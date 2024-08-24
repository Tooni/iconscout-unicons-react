import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWindowSection = (
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
      d="M9 10h6v12H9zM2 10v11a1 1 0 0 0 1 1h4V10z"
      className="window-section_svg__uim-tertiary"
    />
    <path
      d="M22 8H2v2h5v12h2V10h6v12h2V10h5z"
      className="window-section_svg__uim-quaternary"
    />
    <path
      d="M17 10v12h4a1 1 0 0 0 1-1V10z"
      className="window-section_svg__uim-tertiary"
    />
    <path
      d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1"
      className="window-section_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowSection)
export default ForwardRef
