import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgGrids = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M2 3.9v16.2c0 1 .9 1.9 1.9 1.9H8V2H3.9C2.9 2 2 2.9 2 3.9M20.1 2H16v20h4.1c1 0 1.9-.9 1.9-1.9V3.9c0-1-.9-1.9-1.9-1.9M10 22h4V2h-4z" />
  </svg>
)
const ForwardRef = forwardRef(SvgGrids)
export default ForwardRef
