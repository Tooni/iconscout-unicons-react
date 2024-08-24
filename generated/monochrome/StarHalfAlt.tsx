import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStarHalfAlt = (
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
      d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676 4.123-4.02a1 1 0 0 0 .253-1.025"
      className="star-half-alt_svg__uim-tertiary"
    />
    <path
      d="M11.103 2.998 8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"
      className="star-half-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStarHalfAlt)
export default ForwardRef
