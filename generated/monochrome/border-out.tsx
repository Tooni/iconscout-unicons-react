import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderOut = (
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
      d="M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M5 19h14V5H5Z"
      className="border-out_svg__uim-primary"
    />
    <circle cx={12} cy={12} r={1} className="border-out_svg__uim-tertiary" />
    <circle cx={12} cy={16} r={1} className="border-out_svg__uim-tertiary" />
    <circle cx={12} cy={8} r={1} className="border-out_svg__uim-tertiary" />
    <circle cx={8} cy={12} r={1} className="border-out_svg__uim-tertiary" />
    <circle cx={16} cy={12} r={1} className="border-out_svg__uim-tertiary" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderOut)
export default ForwardRef
