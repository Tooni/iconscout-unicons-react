import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgVerticalDistributeBottom = (
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
    <path d="M21 18h-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-3 0H6v-4h12ZM3 10h18a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3a1 1 0 0 0 0 2m4-4h10v2H7Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgVerticalDistributeBottom)
export default ForwardRef