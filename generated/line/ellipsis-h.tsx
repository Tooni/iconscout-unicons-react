import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgEllipsisH = (
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
    <path d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2m-7 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2m14 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgEllipsisH)
export default ForwardRef
