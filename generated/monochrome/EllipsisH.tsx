import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEllipsisH = (
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
    <circle cx={12} cy={12} r={2} className="ellipsis-h_svg__uim-primary" />
    <circle cx={5} cy={12} r={2} className="ellipsis-h_svg__uim-primary" />
    <circle cx={19} cy={12} r={2} className="ellipsis-h_svg__uim-primary" />
  </svg>
)
const ForwardRef = forwardRef(SvgEllipsisH)
export default ForwardRef
