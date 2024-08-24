import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeySkeleton = (
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
      d="M7 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-1.415 7.413a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      className="key-skeleton_svg__uim-tertiary"
    />
    <path
      d="m21.001 4.413.706-.706a1 1 0 1 0-1.414-1.414L9.754 12.832a5 5 0 0 1 1.414 1.414l5.591-5.591 2.12 2.12a1 1 0 0 0 1.414-1.414l-2.12-2.12 1.414-1.414.706.705a1 1 0 0 0 1.414-1.414z"
      className="key-skeleton_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgKeySkeleton)
export default ForwardRef