import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGrids = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M23 21V3a1 1 0 0 0-1-1h-5v20h5a1 1 0 0 0 1-1"
      className="grids_svg__uim-tertiary"
    />
    <path
      d="M1 3v18a1 1 0 0 0 1 1h5V2H2a1 1 0 0 0-1 1"
      className="grids_svg__uim-primary"
    />
    <path d="M9 2h6v20H9z" className="grids_svg__uim-tertiary" />
    <path d="M7 2h2v20H7zm8 0h2v20h-2z" className="grids_svg__uim-quaternary" />
  </svg>
)
const ForwardRef = forwardRef(SvgGrids)
export default ForwardRef
