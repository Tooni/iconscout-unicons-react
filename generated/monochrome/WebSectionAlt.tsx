import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWebSectionAlt = (
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
      d="M9.9 2H8.1A2.6 2.6 0 0 0 8 3v18c-.032.337.002.676.1 1h1.8c.098-.324.132-.663.1-1V3a2.6 2.6 0 0 0-.1-1"
      className="web-section-alt_svg__uim-quaternary"
    />
    <path
      d="M3 2h5v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
      className="web-section-alt_svg__uim-primary"
    />
    <path
      d="M10 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H10z"
      className="web-section-alt_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWebSectionAlt)
export default ForwardRef