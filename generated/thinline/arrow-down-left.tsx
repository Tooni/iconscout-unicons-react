import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowDownLeft = (
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
    <path d="M17.452 16.904H7.867l9.97-9.97a.546.546 0 1 0-.77-.772l-9.971 9.97V6.548a.548.548 0 0 0-1.096 0v10.904c0 .303.245.548.548.548h10.904a.548.548 0 0 0 0-1.096" />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowDownLeft)
export default ForwardRef
