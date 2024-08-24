import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgColumns = (
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
    <path d="M11 2h2v20h-2z" className="columns_svg__uim-quaternary" />
    <path
      d="M3 2h8v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
      className="columns_svg__uim-primary"
    />
    <path
      d="M13 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-8z"
      className="columns_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgColumns)
export default ForwardRef
