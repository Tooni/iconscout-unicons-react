import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStethoscopeAlt = (
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
    <path
      d="M8 15a1 1 0 0 1-.625-.22l-3.499-2.798A4.97 4.97 0 0 1 2 8.078V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v4.078a2.99 2.99 0 0 0 1.126 2.342L8 12.72l2.875-2.3A2.99 2.99 0 0 0 12 8.078V4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v5.078a4.98 4.98 0 0 1-1.876 3.904l-3.5 2.799A1 1 0 0 1 8 15m11-1a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3"
      className="stethoscope-alt_svg__uim-tertiary"
    />
    <path
      d="M19 14a3 3 0 0 1-1-.184V15.5a4.5 4.5 0 0 1-9 0v-1.02l-.375.3a1 1 0 0 1-1.25 0L7 14.48v1.02a6.5 6.5 0 0 0 13 0v-1.684A3 3 0 0 1 19 14"
      className="stethoscope-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStethoscopeAlt)
export default ForwardRef
