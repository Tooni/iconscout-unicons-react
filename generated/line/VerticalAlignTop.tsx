import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVerticalAlignTop = (
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
    <path d="M21 2H3a1 1 0 0 0 0 2h3v17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5h3a1 1 0 0 0 1-1V4h3a1 1 0 0 0 0-2m-9 18H8V4h4Zm4-6h-2V4h2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgVerticalAlignTop)
export default ForwardRef
