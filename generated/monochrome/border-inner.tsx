import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBorderInner = (
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
      d="M19.965 13h-16a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2"
      className="border-inner_svg__uim-primary"
    />
    <path
      d="M11.965 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1 1"
      className="border-inner_svg__uim-primary"
    />
    <circle
      cx={3.964}
      cy={16}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={3.964}
      cy={20}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={3.964}
      cy={8}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={3.964}
      cy={4}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={7.964}
      cy={4}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={15.964}
      cy={4}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={7.964}
      cy={20}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={15.964}
      cy={20}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={19.964}
      cy={16}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={19.964}
      cy={20}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={19.964}
      cy={8}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
    <circle
      cx={19.964}
      cy={4}
      r={1}
      className="border-inner_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBorderInner)
export default ForwardRef
