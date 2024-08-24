import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSignalAlt3 = (
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
    <path d="M6.5 16h-4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5M6 22H3v-5h3zM22.5 2h-4a.5.5 0 0 0-.5.5v20a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-20a.5.5 0 0 0-.5-.5M22 22h-3V3h3zm-7.5-12h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M14 22h-3V11h3z" />
  </svg>
)
const ForwardRef = forwardRef(SvgSignalAlt3)
export default ForwardRef
