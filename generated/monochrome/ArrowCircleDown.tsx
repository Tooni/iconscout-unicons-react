import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowCircleDown = (
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
      d="m7.293 12.707 4 4a1.004 1.004 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.586V8a1 1 0 0 0-2 0v5.586l-2.293-2.293a1 1 0 0 0-1.414 1.414"
      className="arrow-circle-down_svg__uim-primary"
    />
    <path
      d="M12 22A10 10 0 1 0 2 12a10.01 10.01 0 0 0 10 10M7.293 11.293a1 1 0 0 1 1.414 0L11 13.586V8a1 1 0 0 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1.004 1.004 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
      className="arrow-circle-down_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowCircleDown)
export default ForwardRef
