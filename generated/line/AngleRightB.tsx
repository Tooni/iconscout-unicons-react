import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleRightB = (
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
    <path d="M15.54 11.29 9.88 5.64a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3 1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleRightB)
export default ForwardRef
