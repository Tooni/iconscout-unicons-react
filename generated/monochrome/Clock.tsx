import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 6a1 1 0 0 1 1 1v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1"
      className="clock_svg__uim-primary"
    />
    <path
      d="M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12m9-5a1 1 0 0 1 2 0v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1 1 0 0 1 11 12Z"
      className="clock_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClock)
export default ForwardRef
