import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderTop = (
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
      d="M20 4.5H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2"
      className="border-top_svg__uim-primary"
    />
    <circle cx={12} cy={7.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={12} cy={11.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={12} cy={15.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={12} cy={19.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={20} cy={7.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={20} cy={11.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={20} cy={15.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={20} cy={19.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={16} cy={19.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={8} cy={19.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={16} cy={11.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={8} cy={11.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={4} cy={7.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={4} cy={11.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={4} cy={15.5} r={1} className="border-top_svg__uim-tertiary" />
    <circle cx={4} cy={19.5} r={1} className="border-top_svg__uim-tertiary" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderTop)
export default ForwardRef
