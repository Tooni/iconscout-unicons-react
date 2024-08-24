import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMultiply = (
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
    <path d="M19.853 19.147 12.707 12l7.146-7.147a.5.5 0 0 0-.707-.707L12 11.293 4.853 4.147a.5.5 0 0 0-.707.707L11.293 12l-7.147 7.146a.5.5 0 1 0 .707.707L12 12.707l7.146 7.147a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.707" />
  </svg>
)
const ForwardRef = forwardRef(SvgMultiply)
export default ForwardRef
