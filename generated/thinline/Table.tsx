import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgTable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5m-13 19H3v-5.5h5.5zm0-6.5H3v-5h5.5zm0-6H3V3h5.5zm6 12.5h-5v-5.5h5zm0-6.5h-5v-5h5zm0-6h-5V3h5zM21 21h-5.5v-5.5H21zm0-6.5h-5.5v-5H21zm0-6h-5.5V3H21z" />
  </svg>
)
const ForwardRef = forwardRef(SvgTable)
export default ForwardRef
