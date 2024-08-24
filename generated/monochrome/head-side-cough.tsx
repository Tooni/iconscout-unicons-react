import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHeadSideCough = (
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
    <circle
      cx={6}
      cy={16.999}
      r={1}
      className="head-side-cough_svg__uim-primary"
    />
    <circle cx={2} cy={18} r={1} className="head-side-cough_svg__uim-primary" />
    <circle cx={5} cy={21} r={1} className="head-side-cough_svg__uim-primary" />
    <path
      d="M21.13 21h-8.463a1 1 0 0 1-1-1v-2H10.8a1.935 1.935 0 0 1-1.934-1.934v-1.8H8a1 1 0 0 1-.904-1.426l1.77-3.758v-.016a7.067 7.067 0 0 1 7.284-7.063A7.25 7.25 0 0 1 23 9.321v.212a1 1 0 0 1-.033.257l-1.796 6.767.919 3.164A1 1 0 0 1 21.13 21"
      className="head-side-cough_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgHeadSideCough)
export default ForwardRef
