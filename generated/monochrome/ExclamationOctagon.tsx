import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExclamationOctagon = (
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
      d="M15.728 22H8.272a1 1 0 0 1-.707-.293l-5.272-5.272A1 1 0 0 1 2 15.728V8.272a1 1 0 0 1 .293-.707l5.272-5.272A1 1 0 0 1 8.272 2h7.456a1 1 0 0 1 .707.293l5.272 5.272a1 1 0 0 1 .293.707v7.456a1 1 0 0 1-.293.707l-5.272 5.272a1 1 0 0 1-.707.293"
      className="exclamation-octagon_svg__uim-tertiary"
    />
    <circle
      cx={12}
      cy={16}
      r={1}
      className="exclamation-octagon_svg__uim-primary"
    />
    <path
      d="M12 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
      className="exclamation-octagon_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamationOctagon)
export default ForwardRef