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
    <path d="M8.46 8.29A1 1 0 1 0 7 9.71L9.34 12 7 14.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42Zm8.5 3-3-3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .04-1.42Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleDoubleRight)
export default ForwardRef
