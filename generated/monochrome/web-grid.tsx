import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgWebGrid = (
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
    <path d="M2 13h12v9h2V2h-2v9H2z" className="web-grid_svg__uim-quaternary" />
    <path
      d="M21 22h-5V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1"
      className="web-grid_svg__uim-primary"
    />
    <path
      d="M14 22H3a1 1 0 0 1-1-1v-8h12zm0-11H2V3a1 1 0 0 1 1-1h11z"
      className="web-grid_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgWebGrid)
export default ForwardRef
