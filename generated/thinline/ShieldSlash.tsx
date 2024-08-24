import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgShieldSlash = (
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
    <path d="M8.285 4.394A9.8 9.8 0 0 0 12 2.924a10.2 10.2 0 0 0 7 1.53v7.416a7.9 7.9 0 0 1-.47 2.7.5.5 0 0 0-.03.17v.014a.496.496 0 0 0 .5.491.5.5 0 0 0 .476-.35c.348-.97.526-1.994.524-3.025V3.86a.502.502 0 0 0-.6-.49 9.24 9.24 0 0 1-7.112-1.458.5.5 0 0 0-.576 0 8.8 8.8 0 0 1-3.597 1.495l-.004.001a.5.5 0 1 0 .174.986m13.568 16.753-19-19a.5.5 0 0 0-.707.707L4 4.707v7.163a9.12 9.12 0 0 0 3.798 7.406l3.91 2.81a.5.5 0 0 0 .584 0l3.911-2.81a8.8 8.8 0 0 0 1.255-1.111l3.688 3.689a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.707m-6.235-2.683L12 21.064l-3.62-2.6A8.12 8.12 0 0 1 5 11.87V5.707l11.752 11.752a8 8 0 0 1-1.134 1.005" />
  </svg>
)
const ForwardRef = forwardRef(SvgShieldSlash)
export default ForwardRef
