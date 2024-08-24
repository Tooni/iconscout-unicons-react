import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowUpLeft = (
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
    <path d="M9.4 8H17c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1s1-.4 1-1V9.4l8.3 8.3c.4.4 1 .4 1.4 0s.4-1 0-1.4z" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowUpLeft)
export default ForwardRef
