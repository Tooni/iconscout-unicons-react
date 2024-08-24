import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSquareFull = (
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
    <path d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-1 18H4V4h16z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSquareFull)
export default ForwardRef