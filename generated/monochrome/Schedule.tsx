import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSchedule = (
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
      d="M7 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1zm10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1z"
      className="schedule_svg__uim-tertiary"
    />
    <path
      d="M19 4h-1v1a1 1 0 0 1-2 0V4H8v1a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v2h20V7a3 3 0 0 0-3-3"
      className="schedule_svg__uim-primary"
    />
    <circle cx={7} cy={13} r={1} className="schedule_svg__uim-primary" />
    <circle cx={7} cy={17} r={1} className="schedule_svg__uim-primary" />
    <circle cx={12} cy={13} r={1} className="schedule_svg__uim-primary" />
    <circle cx={12} cy={17} r={1} className="schedule_svg__uim-primary" />
    <circle cx={17} cy={13} r={1} className="schedule_svg__uim-primary" />
    <circle cx={17} cy={17} r={1} className="schedule_svg__uim-primary" />
    <path
      d="M2 9v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9zm5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      className="schedule_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSchedule)
export default ForwardRef
