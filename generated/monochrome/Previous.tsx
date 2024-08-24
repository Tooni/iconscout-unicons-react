import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgPrevious = (
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
    <path
      d="M16 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L13.414 12l3.293 3.293A1 1 0 0 1 16 17m-8 0a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1"
      className="previous_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPrevious)
export default ForwardRef
