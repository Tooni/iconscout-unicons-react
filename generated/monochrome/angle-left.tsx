import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgAngleLeft = (
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
      d="M14.121 17.243a1 1 0 0 1-.707-.293l-4.242-4.243a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 1.414L11.293 12l3.535 3.536a1 1 0 0 1-.707 1.707"
      className="angle-left_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgAngleLeft)
export default ForwardRef
