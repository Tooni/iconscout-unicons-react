import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMicrosoft = (
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
      d="M2 2h9.503v9.503H2zM12.493 2h9.503v9.503h-9.503zM2 12.497h9.503V22H2zM12.493 12.497h9.503V22h-9.503z"
      className="microsoft_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMicrosoft)
export default ForwardRef
