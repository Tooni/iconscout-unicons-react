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
    <path d="M3 5h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 14H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0-8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0 4H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgAlignRightJustify)
export default ForwardRef