import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDocumentLayoutCenter = (
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
      d="M21 8h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m0 4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2M5 8H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2"
      className="document-layout-center_svg__uim-tertiary"
    />
    <rect
      width={8}
      height={8}
      x={8}
      y={4}
      className="document-layout-center_svg__uim-primary"
      rx={1}
    />
    <path
      d="M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"
      className="document-layout-center_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentLayoutCenter)
export default ForwardRef
