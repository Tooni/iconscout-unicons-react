import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d="M17 6H7a1 1 0 0 0 0 2h4v9a1 1 0 0 0 2 0V8h4a1 1 0 0 0 0-2" />
  </svg>
)
const ForwardRef = forwardRef(SvgText)
export default ForwardRef
