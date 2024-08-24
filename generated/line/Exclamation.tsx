import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgExclamation = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 14a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1m0 4a1.25 1.25 0 1 0-1.25-1.25A1.25 1.25 0 0 0 12 18" />
  </svg>
)
const ForwardRef = forwardRef(SvgExclamation)
export default ForwardRef
