import * as React from 'react'
import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
const SvgStepForward = (
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
      d="M8 17a1 1 0 0 1-.707-1.707L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 8 17m8 0a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1"
      className="step-forward_svg__uim-primary"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgStepForward)
export default ForwardRef
