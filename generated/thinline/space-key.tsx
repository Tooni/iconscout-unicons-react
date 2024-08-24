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
    <path d="M21.5 9a.5.5 0 0 0-.5.5V14H3V9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5" />
  </svg>
)
const ForwardRef = forwardRef(SvgSpaceKey)
export default ForwardRef
