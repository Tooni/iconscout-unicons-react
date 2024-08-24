import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSpaceKey = (
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
    <path d="M21 9c-.6 0-1 .4-1 1v3H4v-3c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgSpaceKey)
export default ForwardRef
