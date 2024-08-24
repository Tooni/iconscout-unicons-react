import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderVertical = (
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
      d="M11 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1"
      className="border-vertical_svg__uim-primary"
    />
    <circle
      cx={7}
      cy={12}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={3}
      cy={12}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={15}
      cy={12}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={19}
      cy={12}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle cx={7} cy={4} r={1} className="border-vertical_svg__uim-tertiary" />
    <circle cx={3} cy={4} r={1} className="border-vertical_svg__uim-tertiary" />
    <circle
      cx={15}
      cy={4}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={19}
      cy={4}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={19}
      cy={8}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={19}
      cy={16}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle cx={3} cy={8} r={1} className="border-vertical_svg__uim-tertiary" />
    <circle
      cx={3}
      cy={16}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={7}
      cy={20}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={3}
      cy={20}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={15}
      cy={20}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
    <circle
      cx={19}
      cy={20}
      r={1}
      className="border-vertical_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderVertical)
export default ForwardRef
