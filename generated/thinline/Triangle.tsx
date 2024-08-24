import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTriangle = (
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
    <path d="m21.934 20.006-9.5-16.51a.52.52 0 0 0-.868 0l-9.5 16.51a.5.5 0 0 0 .434.749h19a.5.5 0 0 0 .434-.75m-18.57-.251L12 4.748l8.636 15.007z" />
  </svg>
)
const ForwardRef = forwardRef(SvgTriangle)
export default ForwardRef
