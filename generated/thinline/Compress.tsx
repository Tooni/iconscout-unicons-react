import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCompress = (
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
    <path d="M7.5 16h-5a.5.5 0 0 0 0 1H7v4.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.5-.5m9-8h5a.5.5 0 0 0 0-1H17V2.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5m-9-6a.5.5 0 0 0-.5.5V7H2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5m14 14h-5a.5.5 0 0 0-.5.5v5a.5.5 0 1 0 1 0V17h4.5a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgCompress)
export default ForwardRef
