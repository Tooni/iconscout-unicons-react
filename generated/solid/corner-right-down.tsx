import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCornerRightDown = (
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
    <path d="M21.7 13.4c-.4-.4-1-.4-1.4 0l-2.9 2.9v-8c0-2.2-1.8-4-4-4H3c-.6 0-1 .4-1 1s.4 1 1 1h10.4c1.1 0 2 .9 2 2v8l-2.9-2.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.2.2.4.3.7.3s.5-.1.7-.3l4.6-4.6c.4-.4.4-1.1 0-1.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgCornerRightDown)
export default ForwardRef
