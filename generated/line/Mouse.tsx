import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMouse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 2a7 7 0 0 0-7 7v6a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7M7 9a5 5 0 0 1 4-4.9V10H7Zm10 6a5 5 0 0 1-10 0v-3h10Zm0-5h-4V4.1A5 5 0 0 1 17 9Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMouse)
export default ForwardRef
