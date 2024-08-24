import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDirection = (
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
    <path d="M8.854 9.854 12 6.707l3.146 3.147a.5.5 0 0 0 .707 0 .5.5 0 0 0 0-.707l-3.5-3.5a.5.5 0 0 0-.706 0l-3.5 3.5a.5.5 0 0 0 .707.707m6.292 4.292L12 17.293l-3.147-3.146a.5.5 0 0 0-.707.707l3.5 3.5a.5.5 0 0 0 .707 0l3.5-3.5a.5.5 0 0 0-.707-.708" />
  </svg>
)
const ForwardRef = forwardRef(SvgDirection)
export default ForwardRef
