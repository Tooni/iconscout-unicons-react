import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgBookmarkFull = (
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
    <path d="M18 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1.65.76L12 17.27l5.29 4.44A1 1 0 0 0 18 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 19 21V3a1 1 0 0 0-1-1m-1 16.86-4.36-3.66a1 1 0 0 0-1.28 0L7 18.86V4h10Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgBookmarkFull)
export default ForwardRef
