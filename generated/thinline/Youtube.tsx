import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgYoutube = (
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
    <path d="m14.792 10.775-3.668-2.112A1.417 1.417 0 0 0 9 9.89v4.222c-.003.506.267.974.706 1.224.216.126.461.193.711.193s.493-.067.708-.191l3.667-2.112a1.413 1.413 0 0 0 0-2.45m-.5 1.582-3.666 2.113a.41.41 0 0 1-.419 0A.41.41 0 0 1 10 14.11V9.89a.41.41 0 0 1 .207-.359.402.402 0 0 1 .418 0l3.667 2.113a.41.41 0 0 1 0 .714M19 4H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V7a3.003 3.003 0 0 0-3-3m2 13a2.003 2.003 0 0 1-2 2H5a2.003 2.003 0 0 1-2-2V7a2.003 2.003 0 0 1 2-2h14a2.003 2.003 0 0 1 2 2z" />
  </svg>
)
const ForwardRef = forwardRef(SvgYoutube)
export default ForwardRef
