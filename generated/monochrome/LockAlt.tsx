import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgLockAlt = (
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
      d="M9 7a3 3 0 1 1 6 0v2h2V7A5 5 0 0 0 7 7v2h2zm3 11a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1"
      className="lock-alt_svg__uim-tertiary"
    />
    <path
      d="M17 9H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-4 8a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0z"
      className="lock-alt_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLockAlt)
export default ForwardRef
