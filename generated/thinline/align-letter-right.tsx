import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAlignLetterRight = (
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
    <path d="M9.5 4h12a.5.5 0 0 0 0-1h-12a.5.5 0 0 0 0 1m12 17h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0-4h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m0-6h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1m0-4h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignLetterRight)
export default ForwardRef
