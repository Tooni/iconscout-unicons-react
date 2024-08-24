import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgRuler = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m22.6 7.1-5.7-5.7c-.4-.4-1-.4-1.4 0L1.4 15.5c-.4.4-.4 1 0 1.4l5.7 5.7c.4.4 1 .4 1.4 0l2.1-2.1L7.1 17c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.5 3.5 1.4-1.4-2.1-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.1 2.1 1.4-1.4-3.5-3.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.5 3.5 1.4-1.4-2.1-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.1 2.1 2.1-2.1c.5-.5.5-1.2.1-1.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgRuler)
export default ForwardRef
