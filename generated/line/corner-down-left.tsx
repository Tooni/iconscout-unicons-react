import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCornerDownLeft = (
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
    <path d="M18.69 2a1 1 0 0 0-1 1v10.37a2 2 0 0 1-2 2h-8l2.92-2.92A1 1 0 0 0 9.24 11l-4.63 4.66a1.2 1.2 0 0 0-.22.33 1 1 0 0 0 0 .76 1 1 0 0 0 .22.33l4.63 4.63a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-2.92-2.92h8a4 4 0 0 0 4-4V3a1 1 0 0 0-1.04-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerDownLeft)
export default ForwardRef
