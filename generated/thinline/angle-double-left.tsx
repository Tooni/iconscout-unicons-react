import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleDoubleLeft = (
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
    <path d="m8.207 12 3.146-3.146a.5.5 0 0 0-.707-.707l-3.5 3.5a.5.5 0 0 0 0 .707l3.5 3.5a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.708zm9.147 3.146L14.207 12l3.146-3.146a.5.5 0 0 0-.707-.707l-3.5 3.5a.5.5 0 0 0 0 .707l3.5 3.5a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.708" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleLeft)
export default ForwardRef
