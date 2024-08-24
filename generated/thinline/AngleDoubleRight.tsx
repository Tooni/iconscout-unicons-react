import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleDoubleRight = (
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
    <path d="M7.353 8.147a.5.5 0 0 0-.707.707L9.793 12l-3.147 3.146a.5.5 0 1 0 .707.708l3.5-3.5a.5.5 0 0 0 0-.707zm9.5 3.5-3.5-3.5a.5.5 0 0 0-.707.707L15.793 12l-3.147 3.146a.5.5 0 1 0 .707.708l3.5-3.5a.5.5 0 0 0 0-.707" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleRight)
export default ForwardRef
