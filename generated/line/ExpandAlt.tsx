import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExpandAlt = (
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
    <path d="M9.79 12.79 4 18.59V17a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54A1 1 0 0 0 3 22h4a1 1 0 0 0 0-2H5.41l5.8-5.79a1 1 0 0 0-1.42-1.42M21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-4a1 1 0 0 0 0 2h1.59l-5.8 5.79a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L20 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38" />
  </svg>
)
const ForwardRef = forwardRef(SvgExpandAlt)
export default ForwardRef
