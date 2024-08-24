import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCheckSquare = (
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
    <path d="M9.847 15.754a.5.5 0 0 0 .707 0l6.8-6.8a.5.5 0 0 0-.708-.708L10.2 14.693l-2.847-2.846a.5.5 0 0 0-.707.707zM21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5M21 21H3V3h18z" />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckSquare)
export default ForwardRef
