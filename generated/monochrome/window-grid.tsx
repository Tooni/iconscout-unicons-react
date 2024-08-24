import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWindowGrid = (
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
      d="M22 11H10V2H8v20h2v-9h12z"
      className="window-grid_svg__uim-quaternary"
    />
    <path
      d="M3 2h5v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
      className="window-grid_svg__uim-primary"
    />
    <path
      d="M10 2h11a1 1 0 0 1 1 1v8H10zm0 11h12v8a1 1 0 0 1-1 1H10z"
      className="window-grid_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWindowGrid)
export default ForwardRef
