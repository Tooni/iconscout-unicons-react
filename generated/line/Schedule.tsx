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
    <path d="M12 14a1 1 0 1 0-1-1 1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1m-5 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1M7 14a1 1 0 1 0-1-1 1 1 0 0 0 1 1M19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM7 18a1 1 0 1 0-1-1 1 1 0 0 0 1 1" />
  </svg>
)
const ForwardRef = forwardRef(SvgSchedule)
export default ForwardRef