import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExpandLeft = (
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
    <path d="M9.17 10.17a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L5.41 4H7a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 2 3v4a1 1 0 0 0 2 0V5.41l4.46 4.47a1 1 0 0 0 .71.29m6.37-1.71a1 1 0 0 0-1.42 0l-5.66 5.66a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l5.66-5.66a1 1 0 0 0 0-1.42M21 16a1 1 0 0 0-1 1v1.59l-4.46-4.47a1 1 0 1 0-1.42 1.42L18.59 20H17a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 22 21v-4a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgExpandLeft)
export default ForwardRef
