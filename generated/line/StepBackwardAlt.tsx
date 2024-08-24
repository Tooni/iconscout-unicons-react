import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStepBackwardAlt = (
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
    <path d="M19 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3m1 15a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0ZM12.63 5.63a2.6 2.6 0 0 0-2.64 0l-6.67 4a2.75 2.75 0 0 0 0 4.7l6.67 4a2.57 2.57 0 0 0 2.64 0A2.74 2.74 0 0 0 14 16V8a2.74 2.74 0 0 0-1.37-2.37M12 16a.72.72 0 0 1-.36.64.61.61 0 0 1-.63 0l-6.66-4a.76.76 0 0 1 0-1.28l6.66-4a.63.63 0 0 1 .32-.09.64.64 0 0 1 .31.08A.72.72 0 0 1 12 8Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgStepBackwardAlt)
export default ForwardRef
