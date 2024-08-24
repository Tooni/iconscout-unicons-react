import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlignRightJustify = (
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
    <path d="M21.5 20h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1M2.5 5h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m19 7h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0 4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0-8h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignRightJustify)
export default ForwardRef
