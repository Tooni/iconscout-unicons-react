import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVerticalAlignBottom = (
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
    <path d="M21 20h-3V9a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-9 0H8V4h4Zm4 0h-2V10h2Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgVerticalAlignBottom)
export default ForwardRef
