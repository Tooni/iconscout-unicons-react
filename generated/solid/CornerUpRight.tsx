import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCornerUpRight = (
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
    <path d="m19.4 6.9-4.6-4.6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.9 2.9h-8c-2.2 0-4 1.8-4 4V21c0 .6.4 1 1 1s1-.4 1-1V10.6c0-1.1.9-2 2-2h8l-2.9 2.9c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4.6-4.6c.4-.4.4-1 0-1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerUpRight)
export default ForwardRef
