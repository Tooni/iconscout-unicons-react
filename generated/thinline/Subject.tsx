import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSubject = (
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
    <path d="M2.5 8h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m11 9h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m8-5h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgSubject)
export default ForwardRef
