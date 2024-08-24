import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowDownRight = (
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
    <path d="M17 6a1 1 0 0 0-1 1v7.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H7a1 1 0 0 0 0 2h10a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 18 17V7a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDownRight)
export default ForwardRef
