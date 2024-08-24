import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCornerDownRight = (
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
    <path d="M19.4 15.7 14.8 11c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.9 2.9h-7c-1.7 0-3-1.3-3-3V3c0-.6-.4-1-1-1s-1 .4-1 1v9.4c0 2.8 2.2 5 5 5h7l-2.9 2.9c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4.6-4.6c.4-.4.4-1 0-1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerDownRight)
export default ForwardRef
