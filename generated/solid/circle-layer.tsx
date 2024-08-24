import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCircleLayer = (
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
    <path d="M7 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5m4-5c-2.4 0-4.6 1.5-5.5 3.7 3.5-.9 7 1.3 7.8 4.7.3 1 .3 2.1 0 3.1 3.1-1.3 4.5-4.8 3.2-7.8C15.6 8.5 13.4 7 11 7m10.2-1.2C20.1 3.5 17.6 2 15 2S9.9 3.5 8.8 5.8c4-1.2 8.2 1 9.4 4.9q.75 2.25 0 4.5c3.4-1.7 4.8-5.9 3-9.4" />
  </svg>
)
const ForwardRef = forwardRef(SvgCircleLayer)
export default ForwardRef
