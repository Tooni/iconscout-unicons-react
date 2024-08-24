import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVirusSlash = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <circle cx={9} cy={15} r={1} className="virus-slash_svg__uim-primary" />
    <circle cx={15} cy={9} r={1} className="virus-slash_svg__uim-primary" />
    <path
      d="M12 8a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 15a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m10-10h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"
      className="virus-slash_svg__uim-quaternary"
    />
    <path
      d="m4.98 17.607-.758.757a1 1 0 1 0 1.414 1.414l.758-.757a9 9 0 0 1-1.415-1.414zM19.02 6.394l.758-.758a1 1 0 0 0-1.414-1.414l-.757.757a9 9 0 0 1 1.414 1.415z"
      className="virus-slash_svg__uim-primary"
    />
    <path
      d="M6 13H2a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2"
      className="virus-slash_svg__uim-quaternary"
    />
    <path
      d="M22 23.002a1 1 0 0 1-.707-.293l-20-20a1 1 0 0 1 1.414-1.414l20 20A1 1 0 0 1 22 23.002"
      className="virus-slash_svg__uim-primary"
    />
    <path
      d="M15.746 14.334a1.5 1.5 0 0 0-2.08-2.08zM8.252 9.668a1.5 1.5 0 0 0 2.08 2.08z"
      className="virus-slash_svg__uim-secondary"
    />
    <path
      d="m17.606 19.022-7.274-7.274a1.5 1.5 0 0 1-2.08-2.08L4.978 6.394A8.94 8.94 0 0 0 3.06 11H6a1 1 0 0 1 0 2H3.059A9.01 9.01 0 0 0 11 20.94V17a1 1 0 0 1 2 0v3.941a8.95 8.95 0 0 0 4.606-1.919M9 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1M6.392 4.98l7.274 7.274a1.5 1.5 0 0 1 2.08 2.08l3.275 3.274A8.95 8.95 0 0 0 20.94 13H18a1 1 0 0 1 0-2h2.94A9.01 9.01 0 0 0 13 3.059V7a1 1 0 0 1-2 0V3.06a8.95 8.95 0 0 0-4.608 1.92M15 8a1 1 0 1 1-1 1 1 1 0 0 1 1-1"
      className="virus-slash_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVirusSlash)
export default ForwardRef