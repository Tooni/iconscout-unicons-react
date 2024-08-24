import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgListUl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M3.5 12a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m3-4h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1m-3 9a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m18-5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1m-18-5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m18 10h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgListUl)
export default ForwardRef
