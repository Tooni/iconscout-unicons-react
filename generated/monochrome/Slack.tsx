import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSlack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <g data-name="Brand Logos">
      <path
        d="M9.338 2a2 2 0 0 0 .001 4h1.996V4a2 2 0 0 0-1.997-2m0 5.333H4.016a2 2 0 0 0 0 4h5.322a2 2 0 0 0 0-4"
        className="slack_svg__uim-primary"
      />
      <path
        d="M21.98 9.333a1.996 1.996 0 1 0-3.993 0v2h1.997a2 2 0 0 0 1.996-2m-5.323 0V4a1.996 1.996 0 1 0-3.992 0v5.333a1.996 1.996 0 1 0 3.992 0"
        className="slack_svg__uim-quaternary"
      />
      <path
        d="M14.661 22a2 2 0 0 0 0-4h-1.996v2a2 2 0 0 0 1.996 2m0-5.334h5.323a2 2 0 0 0 0-4h-5.322a2 2 0 0 0-.001 4"
        className="slack_svg__uim-secondary"
      />
      <path
        d="M2.02 14.666a1.996 1.996 0 1 0 3.993 0v-2H4.016a2 2 0 0 0-1.996 2m5.323 0V20a1.996 1.996 0 1 0 3.992 0v-5.332a1.996 1.996 0 1 0-3.992-.002"
        className="slack_svg__uim-tertiary"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgSlack)
export default ForwardRef
