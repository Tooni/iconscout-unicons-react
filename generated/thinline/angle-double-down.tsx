import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleDoubleDown = (
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
    <path d="M11.646 10.854a.5.5 0 0 0 .707 0l3.5-3.5a.5.5 0 0 0-.707-.708L12 9.793 8.853 6.647a.5.5 0 0 0-.707.707zm3.5 1.792L12 15.793l-3.147-3.146a.5.5 0 0 0-.707.707l3.5 3.5a.5.5 0 0 0 .707 0l3.5-3.5a.5.5 0 0 0-.707-.708" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleDown)
export default ForwardRef
