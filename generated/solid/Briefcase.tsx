import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBriefcase = (
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
    <path d="M17 15.5V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.5H9V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.5H5c-.7 0-1.4-.2-2-.5v4c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-4c-.6.3-1.3.5-2 .5zM21 6h-4V5c0-1.7-1.3-3-3-3h-4C8.3 2 7 3.3 7 5v1H3c-.6 0-1 .4-1 1v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-.6-.4-1-1-1m-6 0H9V5c0-.6.4-1 1-1h4c.6 0 1 .4 1 1z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBriefcase)
export default ForwardRef
