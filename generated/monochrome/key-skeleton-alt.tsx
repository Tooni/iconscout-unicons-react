import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgKeySkeletonAlt = (
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
      d="M7 12a5 5 0 1 0 5 5 5 5 0 0 0-5-5m-1.415 7.412a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      className="key-skeleton-alt_svg__uim-tertiary"
    />
    <path
      d="M21.708 6.534 20.293 5.12l1.413-1.413a1 1 0 1 0-1.414-1.414L9.753 12.831a5 5 0 0 1 1.415 1.414l4.883-4.883 1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414 1.414-1.414 1.415 1.414a1 1 0 0 0 1.414-1.414"
      className="key-skeleton-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgKeySkeletonAlt)
export default ForwardRef
