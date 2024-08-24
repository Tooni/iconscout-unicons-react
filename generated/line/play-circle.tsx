import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPlayCircle = (
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
    <path d="m16 10.27-5-2.89a2 2 0 0 0-3 1.73v5.78a2 2 0 0 0 1 1.73 2 2 0 0 0 2 0l5-2.89a2 2 0 0 0 0-3.46M15 12l-5 2.89V9.11zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8" />
  </svg>
)
const ForwardRef = forwardRef(SvgPlayCircle)
export default ForwardRef
