import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMapPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M16.37 12.79a1 1 0 0 0-.74 1.86C17.09 15.23 18 16.13 18 17c0 1.42-2.46 3-6 3s-6-1.58-6-3c0-.87.91-1.77 2.37-2.35a1 1 0 0 0-.74-1.86C5.36 13.69 4 15.26 4 17c0 2.8 3.51 5 8 5s8-2.2 8-5c0-1.74-1.36-3.31-3.63-4.21M11 9.86V17a1 1 0 0 0 2 0V9.86a4 4 0 1 0-2 0M12 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgMapPin)
export default ForwardRef
