import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRulerCombined = (
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
      d="M14 10h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1zM9 6a1 1 0 0 0-1 1v1H7a1 1 0 0 0 0 2h3V7a1 1 0 0 0-1-1m1 6v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1z"
      className="ruler-combined_svg__uim-primary"
    />
    <path
      d="M10 12v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1Z"
      className="ruler-combined_svg__uim-primary"
    />
    <path
      d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
      className="ruler-combined_svg__uim-tertiary"
    />
    <path
      d="M10 16v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm8-6h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1z"
      className="ruler-combined_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRulerCombined)
export default ForwardRef
