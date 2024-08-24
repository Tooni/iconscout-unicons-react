import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHospitalSquareSign = (
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
      d="M15 6a1 1 0 0 0-1 1v4h-4V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"
      className="hospital-square-sign_svg__uim-primary"
    />
    <path
      d="M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3m-3 15a1 1 0 0 1-2 0v-4h-4v4a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0v4h4V7a1 1 0 0 1 2 0Z"
      className="hospital-square-sign_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHospitalSquareSign)
export default ForwardRef
