import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWindowMaximize = (
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
    <path d="M2 8h20v2H2z" className="window-maximize_svg__uim-quaternary" />
    <path
      d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1"
      className="window-maximize_svg__uim-primary"
    />
    <path
      d="M2 10h20v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
      className="window-maximize_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowMaximize)
export default ForwardRef
