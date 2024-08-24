import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRecordAudio = (
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
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10 0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18 9.01 9.01 0 0 1 9 9 9 9 0 0 1-9 9m0-15a6 6 0 1 0 0 12 6.007 6.007 0 0 0 6-6 6 6 0 0 0-6-6m0 11a5 5 0 1 1 0-10 5 5 0 0 1 0 10" />
  </svg>
)
const ForwardRef = forwardRef(SvgRecordAudio)
export default ForwardRef
