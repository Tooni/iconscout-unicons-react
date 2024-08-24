import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeyholeSquareFull = (
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
    <path d="M11 11.72V15a1 1 0 0 0 2 0v-3.28A2 2 0 0 0 14 10a2 2 0 0 0-4 0 2 2 0 0 0 1 1.72M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 18H4V4h16Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgKeyholeSquareFull)
export default ForwardRef
