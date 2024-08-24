import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgScroll = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11.29 9.71a1 1 0 0 0 1.42 0l5-5a1 1 0 1 0-1.42-1.42L12 7.59l-4.29-4.3a1 1 0 0 0-1.42 1.42Zm1.42 4.58a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 1.42 1.42l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgScroll)
export default ForwardRef
