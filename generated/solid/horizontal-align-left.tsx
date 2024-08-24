import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgHorizontalAlignLeft = (
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
    <path d="M21 10h-5V7c0-.6-.4-1-1-1H4V3c0-.6-.4-1-1-1-.5 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1v-3h17c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m-7 0H4V8h10z" />
  </svg>
)
const ForwardRef = forwardRef(SvgHorizontalAlignLeft)
export default ForwardRef
