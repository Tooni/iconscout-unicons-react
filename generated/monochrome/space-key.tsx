import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgSpaceKey = (
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
      d="M21 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h16v-3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
      className="space-key_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSpaceKey)
export default ForwardRef
