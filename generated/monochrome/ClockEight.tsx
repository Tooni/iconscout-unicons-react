import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClockEight = (
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
      d="M12 6a1 1 0 0 0-1 1v4.422l-2.098 1.212a1 1 0 0 0 1 1.732l2.598-1.5A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1"
      className="clock-eight_svg__uim-primary"
    />
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 10a1 1 0 0 1-.5.866l-2.598 1.5a1 1 0 0 1-1-1.732L11 11.422V7a1 1 0 0 1 2 0Z"
      className="clock-eight_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClockEight)
export default ForwardRef
