import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEllipsisV = (
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
    <circle cx={12} cy={12} r={2} className="ellipsis-v_svg__uim-primary" />
    <circle cx={12} cy={5} r={2} className="ellipsis-v_svg__uim-primary" />
    <circle cx={12} cy={19} r={2} className="ellipsis-v_svg__uim-primary" />
  </svg>
)
const ForwardRef = forwardRef(SvgEllipsisV)
export default ForwardRef
