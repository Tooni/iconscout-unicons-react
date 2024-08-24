import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgMouseAlt2 = (
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
    <path d="M12 2a7 7 0 0 0-7 7v6a7.01 7.01 0 0 0 7 7 7.01 7.01 0 0 0 7-7V9a7 7 0 0 0-7-7m6 13a6 6 0 1 1-12 0V9a6.004 6.004 0 0 1 5.5-5.974V12.5a.5.5 0 1 0 1 0V3.026A6.004 6.004 0 0 1 18 9z" />
  </svg>
)
const ForwardRef = forwardRef(SvgMouseAlt2)
export default ForwardRef
