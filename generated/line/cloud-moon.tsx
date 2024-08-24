import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCloudMoon = (
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
    <path d="M21.7 9.07a1 1 0 0 0-.93-.26 3 3 0 0 1-.66.08 3 3 0 0 1-3-3 3 3 0 0 1 .08-.66 1 1 0 0 0-.26-.93A1 1 0 0 0 16 4a4.93 4.93 0 0 0-3.83 4.21A6.2 6.2 0 0 0 10.5 8a6 6 0 0 0-5.94 5.13A3.5 3.5 0 0 0 5.5 20h9.17A4.33 4.33 0 0 0 19 15.67a4.2 4.2 0 0 0-.49-2A4.94 4.94 0 0 0 22 10a1 1 0 0 0-.3-.93m-7 8.93H5.5a1.5 1.5 0 0 1 0-3 1 1 0 0 0 1-1 4 4 0 0 1 6.18-3.34 3.94 3.94 0 0 1 1.57 2 1 1 0 0 0 .78.67 2.33 2.33 0 0 1-.36 4.67Zm2.44-6.11a2.6 2.6 0 0 1-.42 0 4.6 4.6 0 0 0-.72-.31 6.06 6.06 0 0 0-1.82-2.28v-.37a3 3 0 0 1 1.05-2.28 5 5 0 0 0 4.23 4.23 3 3 0 0 1-2.35 1.01Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCloudMoon)
export default ForwardRef
