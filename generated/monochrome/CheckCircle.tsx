import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgCheckCircle = (
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
      d="M10.313 16.094a1 1 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a1 1 0 0 1-.707.293Z"
      className="check-circle_svg__uim-primary"
      opacity={0.99}
    />
    <path
      d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.207 7.613-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413"
      className="check-circle_svg__uim-tertiary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckCircle)
export default ForwardRef
