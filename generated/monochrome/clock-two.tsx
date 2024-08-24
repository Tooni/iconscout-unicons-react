import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClockTwo = (
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
    <circle cx={12} cy={12} r={10} className="clock-two_svg__uim-tertiary" />
    <path
      d="M11 7a1 1 0 0 1 2 0v3.268l1.098-.634a1 1 0 0 1 1 1.732l-2.598 1.5A1.014 1.014 0 0 1 11 12Z"
      className="clock-two_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClockTwo)
export default ForwardRef
