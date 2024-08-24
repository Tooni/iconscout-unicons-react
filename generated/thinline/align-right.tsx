import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlignRight = (
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
    <path d="M21.5 18h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1M2.5 7h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m19 3h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1m0 4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignRight)
export default ForwardRef
