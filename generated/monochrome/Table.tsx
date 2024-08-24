import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 22H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M4 20h16V4H4Z"
      className="table_svg__uim-primary"
    />
    <path
      d="M9 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1"
      className="table_svg__uim-primary"
    />
    <path
      d="M21 10H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 6H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2"
      className="table_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTable)
export default ForwardRef
