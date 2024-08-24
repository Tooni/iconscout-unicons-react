import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgUserNurse = (
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
      d="M20.94 22H3.06a1 1 0 0 1-.994-1.108 9.995 9.995 0 0 1 19.868 0A1 1 0 0 1 20.94 22"
      className="user-nurse_svg__uim-tertiary"
    />
    <path
      d="m12.708 18.307 4.706-4.715a10 10 0 0 0-10.833.003l4.712 4.712A1 1 0 0 0 12 18.6a1 1 0 0 0 .708-.293"
      className="user-nurse_svg__uim-quaternary"
    />
    <path
      d="M11.995 14a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6"
      className="user-nurse_svg__uim-quaternary"
    />
    <path
      d="M6.09 9a5.993 5.993 0 0 0 11.82 0Z"
      className="user-nurse_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUserNurse)
export default ForwardRef
