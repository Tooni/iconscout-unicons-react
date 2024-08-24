import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowUpLeft = (
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
    <path d="M9.41 8H17a1 1 0 0 0 0-2H7a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 6 7v10a1 1 0 0 0 2 0V9.41l8.29 8.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowUpLeft)
export default ForwardRef
