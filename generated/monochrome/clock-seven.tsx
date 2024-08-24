import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgClockSeven = (
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
      d="M12 6a1.003 1.003 0 0 0-1 1v4.73L9.4 14.5a1 1 0 1 0 1.73 1l1.69-2.93A1 1 0 0 0 13 12V7a1.003 1.003 0 0 0-1-1"
      className="clock-seven_svg__uim-primary"
    />
    <path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 10a1 1 0 0 1-.18.57l-1.69 2.93a1 1 0 1 1-1.73-1l1.6-2.77V7a1 1 0 0 1 2 0Z"
      className="clock-seven_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClockSeven)
export default ForwardRef
