import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLeftArrowToLeft = (
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
    <path d="M21 11H9.41l2.3-2.29a1 1 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L9.41 13H21a1 1 0 0 0 0-2M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgLeftArrowToLeft)
export default ForwardRef
