import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHistory = (
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
    <path d="M16.727 3.18C12.31.81 6.915 2.103 4 6V3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H4.522a8.95 8.95 0 0 1 7.411-4A8.967 8.967 0 1 1 3 12c0-.16 0-.312.009-.472A.5.5 0 0 0 2.52 11c-.27-.01-.5.2-.51.472C2 11.652 2 11.82 2 12c.006 5.52 4.48 9.994 10 10a10 10 0 0 0 8.81-5.273c2.614-4.868.786-10.933-4.083-13.547M12 8a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 0-1h-2v-3A.5.5 0 0 0 12 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgHistory)
export default ForwardRef
