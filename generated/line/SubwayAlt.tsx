import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSubwayAlt = (
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
    <path d="M15 17h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2m6 0V9a3 3 0 0 0-3-3h-5V4h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2h4v2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 1.2 2.39l-.91.9a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L6.41 20h11.18l1.7 1.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.91-.9A3 3 0 0 0 21 17M5 9a1 1 0 0 1 1-1h5v4H5Zm14 8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14Zm0-5h-6V8h5a1 1 0 0 1 1 1ZM8 17h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2" />
  </svg>
)
const ForwardRef = forwardRef(SvgSubwayAlt)
export default ForwardRef
