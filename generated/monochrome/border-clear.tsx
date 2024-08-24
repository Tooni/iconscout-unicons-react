import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderClear = (
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
    <circle cx={12} cy={16} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={12} cy={20} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={12} cy={8} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={12} cy={4} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={4} cy={16} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={4} cy={20} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={4} cy={8} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={4} cy={4} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={8} cy={4} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={16} cy={4} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={8} cy={20} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={16} cy={20} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={8} cy={12} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={16} cy={12} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={20} cy={16} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={20} cy={20} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={20} cy={8} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={12} cy={12} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={4} cy={12} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={20} cy={12} r={1} className="border-clear_svg__uim-tertiary" />
    <circle cx={20} cy={4} r={1} className="border-clear_svg__uim-tertiary" />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderClear)
export default ForwardRef
