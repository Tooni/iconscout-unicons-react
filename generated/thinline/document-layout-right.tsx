import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgDocumentLayoutRight = (
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
    <path d="M2.5 12h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1m0-4h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1m11 11h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m8-4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0-11h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5m-.5 7h-6V5h6z" />
  </svg>
)
const ForwardRef = forwardRef(SvgDocumentLayoutRight)
export default ForwardRef
