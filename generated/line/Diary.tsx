import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDiary = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M17 2H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h1v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-1h9a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-3 16H6V4h8Zm4-1a1 1 0 0 1-1 1h-1V4h1a1 1 0 0 1 1 1Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDiary)
export default ForwardRef
