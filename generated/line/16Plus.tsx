import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const Svg16Plus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M18 5h1v1a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2h-1V2a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2m3.6 4a1 1 0 0 0-.78 1.18 9 9 0 1 1-7-7 1 1 0 1 0 .4-2A10.8 10.8 0 0 0 12 1a11 11 0 1 0 11 11 10.8 10.8 0 0 0-.22-2.2A1 1 0 0 0 21.6 9M7 7v10a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0m4 2v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-2V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3m4 4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2Z" />
  </svg>
)
const ForwardRef = forwardRef(Svg16Plus)
export default ForwardRef