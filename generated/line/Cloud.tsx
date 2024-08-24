import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M18.42 9.21a7 7 0 0 0-13.36 1.9A4 4 0 0 0 6 19h11a5 5 0 0 0 1.42-9.79M17 17H6a2 2 0 0 1 0-4 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.66A3 3 0 0 1 17 17" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloud)
export default ForwardRef
