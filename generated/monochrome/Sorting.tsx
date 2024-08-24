import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSorting = (
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
      d="M15 19.5a1 1 0 0 1-.707-.293L12 16.914l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 19.5m-3-9a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 8.086l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 12 10.5"
      className="sorting_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSorting)
export default ForwardRef
