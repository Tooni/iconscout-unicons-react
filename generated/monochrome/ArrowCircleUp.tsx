import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgArrowCircleUp = (
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
      d="m16.707 11.293-4-4a1.004 1.004 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 10.414V16a1 1 0 0 0 2 0v-5.586l2.293 2.293a1 1 0 0 0 1.414-1.414"
      className="arrow-circle-up_svg__uim-primary"
    />
    <path
      d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m4.707 10.707a1 1 0 0 1-1.414 0L13 10.414V16a1 1 0 0 1-2 0v-5.586l-2.293 2.293a1 1 0 0 1-1.414-1.414l4-4a1.004 1.004 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414"
      className="arrow-circle-up_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowCircleUp)
export default ForwardRef
