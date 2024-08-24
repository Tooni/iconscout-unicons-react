import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHospital = (
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
      d="M12.5 14.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m-5-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m10-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2"
      className="hospital_svg__uim-tertiary"
    />
    <path
      d="M13.5 7H13v-.5a1 1 0 0 0-2 0V7h-.5a1 1 0 0 0 0 2h.5v.5a1 1 0 0 0 2 0V9h.5a1 1 0 0 0 0-2"
      className="hospital_svg__uim-primary"
    />
    <path
      d="M21.5 6.5h-3v-4a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v4h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1m-14 12h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m5 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m1-5.5H13v.5a1 1 0 0 1-2 0V9h-.5a1 1 0 0 1 0-2h.5v-.5a1 1 0 0 1 2 0V7h.5a1 1 0 0 1 0 2m4 9.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2m0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2"
      className="hospital_svg__uim-quaternary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHospital)
export default ForwardRef
