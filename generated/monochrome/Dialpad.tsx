import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDialpad = (
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
    <circle cx={12} cy={9} r={2} className="dialpad_svg__uim-tertiary" />
    <circle cx={12} cy={3} r={2} className="dialpad_svg__uim-tertiary" />
    <circle cx={12} cy={15} r={2} className="dialpad_svg__uim-tertiary" />
    <circle cx={6} cy={9} r={2} className="dialpad_svg__uim-tertiary" />
    <circle cx={6} cy={3} r={2} className="dialpad_svg__uim-tertiary" />
    <circle cx={6} cy={15} r={2} className="dialpad_svg__uim-tertiary" />
    <circle cx={18} cy={9} r={2} className="dialpad_svg__uim-tertiary" />
    <circle cx={18} cy={3} r={2} className="dialpad_svg__uim-tertiary" />
    <circle cx={18} cy={15} r={2} className="dialpad_svg__uim-tertiary" />
    <circle cx={12} cy={21} r={2} className="dialpad_svg__uim-tertiary" />
  </svg>
)
const ForwardRef = forwardRef(SvgDialpad)
export default ForwardRef
